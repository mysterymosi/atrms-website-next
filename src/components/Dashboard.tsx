import clsx from 'clsx'

import { Container } from '@/components/Container'

const metrics = [
  {
    name: 'Revenue',
    description:
      'See collections against expected intake as they land, so leadership always knows how the day is tracking.',
    className: 'md:col-span-6',
  },
  {
    name: 'Targets',
    description:
      'Track performance against revenue goals in one view — by period, tax type and collecting agency.',
    className: 'md:col-span-6',
  },
  {
    name: 'Taxpayers',
    description:
      'Understand the size and status of the taxpayer base from a single operational view. See registrations, obligations and account status together — who is active, who is behind, and where teams should focus. Filter by type, region or compliance state without waiting on a separate report.',
    className: 'md:col-span-7',
  },
  {
    name: 'Compliance',
    description:
      'Spot gaps in filing, payment and obligation status so non-compliance is visible while there is still time to act.',
    className: 'md:col-span-5',
  },
  {
    name: 'Outstanding Payments',
    description:
      'Keep arrears visible so teams can prioritise recovery and follow up before debt ages.',
    className: 'md:col-span-5',
  },
]

function GridPlus({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={clsx(
        'pointer-events-none absolute size-4 text-neutral-400',
        className,
      )}
    >
      <span className="absolute top-1/2 right-0 left-0 h-px bg-current" />
      <span className="absolute top-0 bottom-0 left-1/2 w-px bg-current" />
    </span>
  )
}

function FeatureCell({
  name,
  description,
  className,
}: {
  name: string
  description: string
  className?: string
}) {
  return (
    <article
      className={clsx(
        'relative border-r border-b border-dashed border-neutral-300 p-6 sm:p-8',
        className,
      )}
    >
      <GridPlus className="top-0 left-0 -translate-x-1/2 -translate-y-1/2" />
      <GridPlus className="top-0 right-0 translate-x-1/2 -translate-y-1/2" />
      <GridPlus className="bottom-0 left-0 -translate-x-1/2 translate-y-1/2" />
      <GridPlus className="right-0 bottom-0 translate-x-1/2 translate-y-1/2" />
      <h3 className="font-display text-lg font-semibold tracking-tight text-primary">
        {name}
      </h3>
      <p className="mt-3 text-sm/6 tracking-tight text-primary/70 sm:text-base/7">
        {description}
      </p>
    </article>
  )
}

export function Dashboard() {
  return (
    <section
      id="dashboard"
      aria-label="Revenue intelligence dashboards"
      className="bg-supporting py-20 sm:py-32"
    >
      <Container>
        <div className="grid grid-cols-1 border-t border-l border-dashed border-neutral-300 md:grid-cols-12">
          {metrics.map((metric) => (
            <FeatureCell
              key={metric.name}
              name={metric.name}
              description={metric.description}
              className={metric.className}
            />
          ))}

          <div className="flex flex-col justify-center px-6 py-10 sm:px-8 md:col-span-7 md:items-end md:py-8 md:text-right">
            <h2 className="font-display text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl lg:leading-[0.95]">
              Give decision-makers a clear view of revenue operations.
            </h2>
          </div>
        </div>
      </Container>
    </section>
  )
}
