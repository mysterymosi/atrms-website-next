import { Container } from '@/components/Container'
import { SectionHead } from '@/components/SectionHead'

const modules = [
  {
    title: 'Taxpayer Management',
    description:
      'Register and manage individual and corporate taxpayer records from a single, accurate source of truth.',
    iconClass: 'bg-navy',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
      </svg>
    ),
  },
  {
    title: 'Revenue Management',
    description:
      'Track collections, payments and reconciliations as they happen, matched to the right tax accounts automatically.',
    iconClass: 'bg-secondary',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5">
        <path d="M3 3v18h18" />
        <path d="M7 15l4-5 3 3 5-7" />
      </svg>
    ),
  },
  {
    title: 'Tax Assessment',
    description:
      'Create and manage accurate assessments, with a clear audit trail from calculation to Notice of Assessment (NOA).',
    iconClass: 'bg-blue',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5">
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="M9 8h6M9 12h6M9 16h3" />
      </svg>
    ),
  },
  {
    title: 'Enforcement and Compliance',
    description:
      'Monitor obligations and surface non-compliance early, while there\'s still time to act.',
    iconClass: 'bg-[#3d4a63]',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5">
        <path d="M12 3l7 4v5c0 5-3.4 7.9-7 9-3.6-1.1-7-4-7-9V7l7-4z" />
      </svg>
    ),
  },
  {
    title: 'Tax Accounts',
    description:
      'An overview of transaction history, liabilities, fines and levies for each taxpayer.',
    iconClass: 'bg-[#0a8f7c]',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18M8 4v5" />
      </svg>
    ),
  },
]

export function PrimaryFeatures() {
  return (
    <section id="platform" className="py-16 md:py-24">
      <Container>
        <SectionHead kicker="Platform" title="One platform, multiple connected modules.">
          Each module works on its own or together: taxpayer data, revenue,
          assessments, compliance and tax accounts for each taxpayer stay in
          sync automatically.
        </SectionHead>
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((module) => (
            <li
              key={module.title}
              className="flex flex-col rounded-2xl border border-border bg-supporting p-7 transition duration-150 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_18px_34px_-20px_rgba(11,42,99,0.3)]"
            >
              <div
                className={`mb-4 flex size-[42px] items-center justify-center rounded-[11px] text-supporting ${module.iconClass}`}
              >
                {module.icon}
              </div>
              <h3 className="mb-2 font-display text-lg font-bold text-navy">
                {module.title}
              </h3>
              <p className="text-sm text-muted">{module.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
