import Link from 'next/link'

export function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="inline-block font-medium rounded-lg px-2 py-1 text-base text-primary/80 hover:bg-primary/5 hover:text-primary"
    >
      {children}
    </Link>
  )
}
