import Link from 'next/link'
import clsx from 'clsx'

const baseStyles = {
  solid:
    'group inline-flex items-center justify-center gap-2 rounded-[9px] px-[22px] py-3 text-[14.5px] font-semibold transition duration-150 ease-out hover:-translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2',
  outline:
    'group inline-flex items-center justify-center gap-2 rounded-[9px] border px-[22px] py-3 text-[14.5px] font-semibold transition duration-150 ease-out hover:-translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2',
}

const variantStyles = {
  solid: {
    slate:
      'bg-navy text-supporting hover:bg-primary-active focus-visible:outline-navy',
    primary:
      'bg-blue text-supporting shadow-[0_8px_20px_-6px_rgba(23,104,224,0.45)] hover:bg-blue-hover hover:shadow-[0_10px_24px_-4px_rgba(23,104,224,0.5)] focus-visible:outline-blue',
    secondary:
      'bg-secondary text-supporting hover:bg-secondary-hover focus-visible:outline-secondary',
    white:
      'bg-supporting text-navy hover:bg-surface focus-visible:outline-supporting',
  },
  outline: {
    slate:
      'border-border text-navy hover:border-blue hover:text-blue focus-visible:outline-blue',
    primary:
      'border-border text-navy hover:border-blue hover:text-blue focus-visible:outline-blue',
    white:
      'border-supporting/50 text-supporting hover:bg-supporting/10 focus-visible:outline-supporting',
  },
}

type ButtonProps = (
  | {
      variant?: 'solid'
      color?: keyof typeof variantStyles.solid
    }
  | {
      variant: 'outline'
      color?: keyof typeof variantStyles.outline
    }
) &
  (
    | Omit<React.ComponentPropsWithoutRef<typeof Link>, 'color'>
    | (Omit<React.ComponentPropsWithoutRef<'button'>, 'color'> & {
        href?: undefined
      })
  )

export function Button({ className, ...props }: ButtonProps) {
  props.variant ??= 'solid'
  props.color ??= 'primary'

  className = clsx(
    baseStyles[props.variant],
    props.variant === 'outline'
      ? variantStyles.outline[props.color]
      : props.variant === 'solid'
        ? variantStyles.solid[props.color]
        : undefined,
    className,
  )

  if (typeof props.href === 'undefined') {
    return <button className={className} {...props} />
  }

  const href = typeof props.href === 'string' ? props.href : undefined
  if (href?.startsWith('#') || href?.startsWith('mailto:')) {
    return <a className={className} href={href}>{props.children}</a>
  }

  return <Link className={className} {...props} />
}
