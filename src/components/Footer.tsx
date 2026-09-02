import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'

const footerColumns = [
  {
    title: 'Platform',
    links: [
      { name: 'Revenue Management', href: '#platform' },
      { name: 'Tax Administration', href: '#platform' },
      { name: 'Compliance', href: '#platform' },
      { name: 'Payments', href: '#solutions' },
      { name: 'Analytics', href: '#dashboard' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About', href: '#about' },
      { name: 'Careers', href: '#about' },
      { name: 'Partners', href: '#integrations' },
      { name: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Insights', href: '#resources' },
      { name: 'Case Studies', href: '#resources' },
      { name: 'FAQs', href: '#faq' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy', href: '#' },
      { name: 'Terms', href: '#' },
      { name: 'Security', href: '#security' },
    ],
  },
]

export function Footer() {
  return (
    <footer id="contact" className="bg-primary/5">
      <Container>
        <div className="py-16">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
            <div className="col-span-2">
              <Logo className="h-10 w-auto" />
              <p className="mt-6 max-w-xs text-sm tracking-tight text-primary/70">
                Smarter Systems. Stronger Governance. Better Lives.
              </p>
            </div>
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="font-display text-sm font-semibold text-primary">
                  {column.title}
                </h3>
                <ul role="list" className="mt-4 flex flex-col gap-y-3">
                  {column.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-primary/70 hover:text-primary"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-primary/10 py-10">
          <p className="text-sm text-primary/60">
            Copyright &copy; {new Date().getFullYear()} Atlas. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
