import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

const features = [
  {
    name: 'Taxpayers',
    summary: 'Manage individual and corporate taxpayer records.',
    description:
      'Keep a single, accurate view of every taxpayer — from registration and identity through to obligations, correspondence and status.',
    cardClass: 'bg-primary-muted',
    icon: TaxpayersIcon,
  },
  {
    name: 'Payments',
    summary: 'Track payments across connected channels.',
    description:
      'See collections as they happen, match them to the right accounts, and keep payment gateways, banks and ledgers in step.',
    cardClass: 'bg-secondary-muted',
    icon: PaymentsIcon,
  },
  {
    name: 'Reports',
    summary: 'Get clear reports for daily operations and management.',
    description:
      'Give teams and decision-makers the operational and management reports they need, without waiting on a separate data exercise.',
    cardClass: 'bg-neutral-100',
    icon: ReportsIcon,
  },
]

function TaxpayersIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-8">
      <path
        d="M9 11a3 3 0 1 0-3-3 3 3 0 0 0 3 3Zm9 0a3 3 0 1 0-3-3 3 3 0 0 0 3 3ZM9 13c-2.8 0-6 1.4-6 4v2h8v-2c0-1.2.5-2.2 1.3-3A8.4 8.4 0 0 0 9 13Zm9 0c-.7 0-1.4.1-2 .3.9.8 1.5 1.9 1.5 3.7v2h6v-2c0-2.6-3.2-4-5.5-4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function PaymentsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-8">
      <rect
        x="3"
        y="6"
        width="18"
        height="12"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M3 10h18" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M7 15h4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function ReportsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-8">
      <path
        d="M5 19V9M10 19V5M15 19v-7M20 19v-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-5">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function SecondaryFeatures() {
  return (
    <section
      id="solutions"
      aria-label="Atlas solutions for complete visibility"
      className="bg-supporting py-16 sm:py-24 lg:py-32"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-stretch lg:gap-16">
          <div>
            <p className="font-display text-sm font-semibold tracking-[0.2em] text-secondary uppercase">
              Solutions
            </p>
            <h2 className="mt-4 max-w-lg font-display text-4xl font-semibold tracking-tight text-primary sm:text-5xl lg:text-6xl">
              One platform.{' '}
              <span className="relative">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 418 42"
                  className="absolute top-2/3 left-0 h-[0.58em] w-full fill-secondary/70"
                  preserveAspectRatio="none"
                >
                  <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
                </svg>
                <span className="relative">Complete visibility.</span>
              </span>
            </h2>
            <p className="mt-6 max-w-md text-lg tracking-tight text-primary/70">
              Monitor taxpayers, payments, reports and dashboards from a single
              operational view.
            </p>
          </div>

          <ul
            role="list"
            className="flex flex-col gap-4 lg:row-span-2"
          >
            {features.map((feature) => (
              <li
                key={feature.name}
                className={`flex min-h-[14rem] flex-col justify-between rounded-3xl p-6 sm:min-h-[16rem] sm:p-8 ${feature.cardClass}`}
              >
                <div className="flex justify-end text-black">
                  <feature.icon />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-black sm:text-2xl">
                    {feature.summary}
                  </h3>
                  <p className="mt-3 text-sm leading-snug text-black/80 sm:text-base">
                    {feature.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="lg:self-end">
            <p className="text-sm font-medium text-primary/80 sm:text-base">
              Ready to see it in one place?
              <br />
              Request a demo or explore how Atlas works.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <Button href="/register" color="secondary">
                Request a Demo
              </Button>
              <Button
                href="#how-it-works"
                color="secondary"
                className="size-11 !p-0"
                aria-label="See how Atlas works"
              >
                <ArrowIcon />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
