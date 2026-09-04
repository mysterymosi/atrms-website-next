import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'

const footerColumns = [
  {
    title: 'PLATFORM',
    links: [
      { name: 'Revenue Management', href: '#platform' },
      { name: 'Tax Administration', href: '#platform' },
      { name: 'Enforcement and Compliance', href: '#platform' },
      { name: 'Payments', href: '#solutions' },
      { name: 'Tax Accounts', href: '#platform' },
      { name: 'Harmonized Bill', href: '#platform' },
    ],
  },
  {
    title: 'COMPANY',
    links: [
      { name: 'About', href: '#why-atlas' },
      { name: 'Partners', href: '#integrations' },
      { name: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'RESOURCES',
    links: [
      { name: 'FAQ', href: '#faq' },
      { name: 'Security', href: '#security' },
      { name: 'Documentation', href: '#' },
    ],
  },
  {
    title: 'LEGAL',
    links: [
      { name: 'Privacy policy', href: '#' },
      { name: 'Terms of service', href: '#' },
    ],
  },
]

export function Footer() {
  return (
    <footer id="contact" className="relative pt-[72px] pb-8">
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[3px] bg-linear-to-r from-navy via-blue to-secondary"
      />
      <Container>
        <div className="grid grid-cols-2 gap-8 pb-11 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div className="col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="mb-3.5 flex items-center gap-2.5 font-display text-lg font-bold text-navy"
            >
              <Logo className="size-[26px] object-contain" width={26} height={26} />
              Atlas
            </Link>
            <p className="max-w-[220px] text-sm text-muted">
              Smarter systems. Stronger governance. Better lives.
            </p>
            <p className="mt-[18px] text-sm leading-[1.9] text-muted">
              <a
                href="mailto:hello@atlasrms.example"
                className="font-medium text-navy"
              >
                hello@atlasrms.example
              </a>
              <br />
              +234 800 000 0000
            </p>
          </div>
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-4 font-mono text-[13px] font-medium text-navy">
                {column.title}
              </h3>
              <ul role="list">
                {column.links.map((link) => (
                  <li key={link.name} className="mb-[11px]">
                    <a
                      href={link.href}
                      className="text-sm text-muted hover:text-blue"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6">
          <span className="text-[13px] text-muted">
            © {new Date().getFullYear()} Atlas. All rights reserved.
          </span>
          <a
            href="#"
            aria-label="LinkedIn"
            className="flex size-[34px] items-center justify-center rounded-full bg-surface text-navy hover:bg-blue hover:text-supporting"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="9" width="4" height="12" />
              <circle cx="5" cy="4" r="2" />
              <path d="M10 21v-8a4 4 0 018 0v8M18 13v8" />
            </svg>
          </a>
        </div>
      </Container>
    </footer>
  )
}
