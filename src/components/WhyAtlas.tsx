import { Container } from '@/components/Container'
import { SectionHead } from '@/components/SectionHead'

const reasons = [
  {
    number: '01',
    name: 'Simple',
    description: 'Make complex processes easier for the people using them every day.',
    proof: 'Fewer screens, one taxpayer record',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-[18px]">
        <circle cx="12" cy="12" r="9" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    number: '02',
    name: 'Connected',
    description:
      'Bring systems and data together instead of leaving teams to reconcile manually.',
    proof: 'Syncs across modules automatically',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-[18px]">
        <circle cx="6" cy="6" r="3" />
        <circle cx="18" cy="18" r="3" />
        <path d="M8.5 8.5l7 7" />
      </svg>
    ),
  },
  {
    number: '03',
    name: 'Configurable',
    description: "Adapt workflows, forms and approval rules to your agency's structure.",
    proof: 'No-code configuration, not custom builds',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-[18px]">
        <path d="M4 6h10M4 12h16M4 18h7" />
        <circle cx="17" cy="6" r="1.6" />
        <circle cx="9" cy="18" r="1.6" />
      </svg>
    ),
  },
  {
    number: '04',
    name: 'Scalable',
    description: 'Built to grow from a single revenue stream to an entire authority.',
    proof: 'Modular rollout, module by module',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-[18px]">
        <path d="M3 17l6-6 4 4 8-8" />
        <path d="M15 7h6v6" />
      </svg>
    ),
  },
]

export function WhyAtlas() {
  return (
    <section id="why-atlas" className="bg-surface py-16 md:py-24">
      <Container>
        <SectionHead
          kicker="Why Atlas"
          title="Built for the way government work actually happens."
        >
          Designed for public-sector complexity, without making everyday work
          harder than it needs to be.
        </SectionHead>
        <ul className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <li
              key={reason.name}
              className="rounded-2xl border border-border bg-supporting p-[26px] transition duration-150 hover:-translate-y-1 hover:shadow-[0_18px_34px_-22px_rgba(11,42,99,0.3)]"
            >
              <div className="mb-4 flex items-start justify-between">
                <span className="font-mono text-[13px] text-border">{reason.number}</span>
                <span className="flex size-[38px] items-center justify-center rounded-[10px] bg-surface-1 text-navy">
                  {reason.icon}
                </span>
              </div>
              <h3 className="mb-2 font-display text-lg font-bold text-navy">
                {reason.name}
              </h3>
              <p className="mb-3.5 text-[13.5px] text-muted">{reason.description}</p>
              <p className="border-t border-dashed border-border pt-3 font-mono text-[12.5px] text-secondary">
                {reason.proof}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
