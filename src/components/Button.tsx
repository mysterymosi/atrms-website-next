import Link from 'next/link'
import clsx from 'clsx'

const baseStyles = {
  solid:
    'group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2',
  outline:
    'group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm',
}

const variantStyles = {
  solid: {
    slate:
      'bg-primary text-supporting hover:bg-primary-hover hover:text-supporting active:bg-primary-active active:text-primary-muted focus-visible:outline-primary',
    primary:
      'bg-primary text-supporting hover:text-supporting hover:bg-primary-hover active:bg-primary-active active:text-primary-muted focus-visible:outline-primary',
    secondary:
      'bg-secondary text-supporting hover:text-supporting hover:bg-secondary-hover active:bg-secondary-active active:text-secondary-muted focus-visible:outline-secondary',
    white:
      'bg-supporting text-primary hover:bg-primary-muted/40 active:bg-secondary-muted active:text-primary focus-visible:outline-supporting',
  },
  outline: {
    slate:
      'ring-primary/20 text-primary hover:text-primary-hover hover:ring-primary/40 active:bg-primary/5 active:text-primary-active focus-visible:outline-secondary focus-visible:ring-primary/30',
    primary:
      'ring-primary/30 text-primary hover:text-primary-hover hover:ring-primary active:bg-primary/5 active:text-primary-active focus-visible:outline-secondary focus-visible:ring-primary/40',
    white:
      'ring-supporting/70 text-supporting hover:ring-supporting active:ring-supporting/70 active:text-primary-muted focus-visible:outline-supporting',
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

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}
