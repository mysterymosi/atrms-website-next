import { Container } from '@/components/Container'
import { SectionHead } from '@/components/SectionHead'

const solutions = [
  {
    tag: 'Taxpayer records',
    title: 'Manage individual and corporate taxpayer records.',
    description:
      'Keep a single, accurate view of every taxpayer, from registration and identity through to obligations, correspondence and status.',
    visualClass: 'bg-surface-1',
    reverse: false,
    rows: [
      ['Adeyemi Logistics Ltd', 'Tax-ID-2934088213'],
      ['Chioma N. (Individual)', 'Tax-ID-4141756907'],
      ['Northbridge Traders', 'Tax ID-9185674556'],
    ],
  },
  {
    tag: 'Payments',
    title: 'Track payments across connected channels.',
    description:
      'See collections as they happen, match them to the right accounts, and keep payment service providers, banks and ledgers in step.',
    visualClass: 'bg-surface-2',
    reverse: true,
    rows: [
      ['Payment Service Providers (PSPs): Settled', '₦2,140,000'],
      ['Card gateway: Settled', '₦860,250'],
      ['USSD: Pending match', '₦74,000'],
    ],
    chips: ['Interswitch', 'Paydirect', 'Remita', 'Etranzact', 'Unified Payment'],
  },
  {
    tag: 'Reporting',
    title: 'Get clear reports for daily operations and management.',
    description:
      'Give teams and decision-makers the operational and management reports they need, without waiting on a separate data exercise.',
    visualClass: 'bg-surface-3',
    reverse: false,
    rows: [
      ['Revenue vs. target (this quarter)', '94%'],
      ['Active taxpayer accounts', '18,402'],
      ['Open compliance cases', '214'],
    ],
  },
]

export function SecondaryFeatures() {
  return (
    <section id="solutions" className="py-16 md:py-24">
      <Container>
        <SectionHead kicker="Solutions" title="One platform. Complete visibility.">
          Monitor taxpayers, payments, reports and dashboards from a single
          operational view, with no separate exports and no waiting on another
          team.
        </SectionHead>
        {solutions.map((solution) => (
          <div
            key={solution.tag}
            className={`grid items-center gap-8 border-t border-border py-[52px] first:border-t-0 md:grid-cols-2 md:gap-16 ${
              solution.reverse ? 'md:[&>div:first-child]:order-2' : ''
            }`}
          >
            <div>
              <span className="mb-2.5 block font-mono text-[12.5px] text-secondary">
                {solution.tag}
              </span>
              <h3 className="mb-3 font-display text-[25px] font-bold text-navy">
                {solution.title}
              </h3>
              <p className="text-[15.5px] text-muted">{solution.description}</p>
            </div>
            <div
              className={`flex min-h-[200px] flex-col justify-center gap-3 rounded-2xl p-7 ${solution.visualClass}`}
            >
              {solution.rows.map(([left, right]) => (
                <div
                  key={left}
                  className="flex items-center justify-between rounded-[9px] border border-border bg-supporting px-4 py-3 text-[13px] text-ink"
                >
                  <span>{left}</span>
                  <span className="font-mono text-xs text-muted">{right}</span>
                </div>
              ))}
              {solution.chips ? (
                <div className="mt-1 flex flex-wrap gap-2">
                  {solution.chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-border bg-supporting px-2.5 py-1 font-mono text-[11.5px] text-navy"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </Container>
    </section>
  )
}
