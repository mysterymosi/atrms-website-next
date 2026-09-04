import { Container } from '@/components/Container'
import { SectionHead } from '@/components/SectionHead'

const systems = [
  {
    title: 'Banks',
    description: 'Connect banking rails for collections, settlements and statements.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5">
        <path d="M3 10l9-6 9 6M5 10v9h14v-9M9 19v-6h6v6" />
      </svg>
    ),
  },
  {
    title: 'Payment service providers',
    description:
      'Accept payments through PSPs including Interswitch, Paydirect, Remita, Etranzact and Unified Payment.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5">
        <rect x="2" y="6" width="20" height="13" rx="2" />
        <path d="M2 10h20" />
      </svg>
    ),
  },
  {
    title: 'Government systems',
    description: 'Exchange data with the platforms agencies already run.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5">
        <path d="M4 21V9l8-6 8 6v12M9 21v-6h6v6" />
      </svg>
    ),
  },
  {
    title: 'Identity platforms',
    description: 'Verify taxpayers against national identity and KYC services.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
      </svg>
    ),
  },
  {
    title: 'Business registries',
    description: 'Keep taxpayer records aligned with registered business data.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5">
        <path d="M6 2h9l5 5v15H6z" />
        <path d="M15 2v5h5" />
      </svg>
    ),
  },
  {
    title: 'Notification services',
    description: 'Send receipts, reminders and notices through existing channels.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5">
        <path d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.7 21a2 2 0 01-3.4 0" />
      </svg>
    ),
  },
]

export function Integrations() {
  return (
    <section id="integrations" className="py-16 md:py-24">
      <Container>
        <SectionHead kicker="Integrations" title="Connect the systems you already use.">
          Atlas fits into the infrastructure around your revenue operation. It
          doesn&apos;t ask you to replace it.
        </SectionHead>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {systems.map((system) => (
            <li
              key={system.title}
              className="flex items-start gap-3.5 rounded-[14px] border border-border bg-supporting p-6 transition duration-150 hover:-translate-y-[3px] hover:border-blue hover:shadow-[0_14px_28px_-20px_rgba(11,42,99,0.3)]"
            >
              <div className="flex size-[38px] shrink-0 items-center justify-center rounded-[9px] bg-surface-1 text-navy">
                {system.icon}
              </div>
              <div>
                <h3 className="mb-1 font-display text-[15.5px] font-bold text-navy">
                  {system.title}
                </h3>
                <p className="text-[13px] text-muted">{system.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
