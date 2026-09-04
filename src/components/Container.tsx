import clsx from 'clsx'

export function Container({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx('mx-auto max-w-[1240px] px-6 lg:px-10', className)}
      {...props}
    />
  )
}
