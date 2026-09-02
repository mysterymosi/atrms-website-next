import { Container } from '@/components/Container'
import { FeatureCarousel } from '@/components/FeatureCarousel'

function UsersIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-12">
      <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm-7 8a7 7 0 0 1 14 0 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1Z" />
    </svg>
  )
}

function ChartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-12">
      <path d="M5 19V9h3v10H5Zm5.5 0V5h3v14h-3ZM16 19v-7h3v7h-3Z" />
    </svg>
  )
}

function ClipboardIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-12">
      <path d="M8 3a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2Zm2 0h4v1h-4V3Z" />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-12">
      <path d="M12 2 4 5v6c0 5.25 3.4 10.14 8 11.35C16.6 21.14 20 16.25 20 11V5l-8-3Zm-1.2 14.3-3.3-3.3 1.4-1.4 1.9 1.9 4.1-4.1 1.4 1.4-5.5 5.5Z" />
    </svg>
  )
}

const features = [
  {
    title: 'Taxpayer Management',
    description: 'Register and manage taxpayer information.',
    cardClass: 'bg-primary-muted rotate-[2deg] lg:rotate-[4deg]',
    iconClass: 'bg-primary text-supporting',
    icon: UsersIcon,
  },
  {
    title: 'Revenue Management',
    description: 'Track collections, payments and reconciliations.',
    cardClass: 'bg-secondary-muted -rotate-[2deg] lg:-rotate-[4deg]',
    iconClass: 'bg-secondary text-supporting',
    icon: ChartIcon,
  },
  {
    title: 'Tax Assessment',
    description: 'Create and manage accurate assessments.',
    cardClass: 'bg-primary/10 rotate-[2deg] lg:rotate-[4deg]',
    iconClass: 'bg-primary-hover text-supporting',
    icon: ClipboardIcon,
  },
  {
    title: 'Compliance',
    description: 'Monitor obligations and identify non-compliance.',
    cardClass: 'bg-neutral-200 -rotate-[2deg] lg:-rotate-[4deg]',
    iconClass: 'bg-neutral-800 text-supporting',
    icon: ShieldIcon,
  },
]

function FeatureCard({
  feature,
}: {
  feature: (typeof features)[number]
}) {
  return (
    <div
      className={`flex min-h-[22rem] flex-col justify-between rounded-2xl p-7 sm:min-h-[25rem] sm:p-8 ${feature.cardClass}`}
    >
      <h3 className="font-display text-xl font-semibold leading-6 text-black sm:text-2xl sm:leading-7">
        {feature.title}
      </h3>
      <div className="flex flex-1 items-center justify-center py-10 sm:py-12">
        <div
          className={`flex size-24 items-center justify-center rounded-full border-[5px] border-supporting sm:size-28 ${feature.iconClass}`}
        >
          <feature.icon />
        </div>
      </div>
      <p className="text-sm font-medium leading-snug text-black sm:text-base">
        {feature.description}
      </p>
    </div>
  )
}

export function PrimaryFeatures() {
  return (
    <section
      id="platform"
      aria-label="Atlas platform capabilities"
      className="bg-supporting py-16 sm:py-20 lg:py-32"
    >
      <Container>
        <div className="mx-auto max-w-3xl px-2 text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-primary sm:text-4xl lg:text-6xl">
            Everything connected in one platform.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-primary/50 sm:text-xl lg:text-2xl">
            Atlas brings key government revenue processes together.
          </p>
        </div>
      </Container>
      <FeatureCarousel>
        {features.map((feature) => (
          <li
            key={feature.title}
            data-feature-card
            className="w-[75%] shrink-0 snap-start py-4"
          >
            <FeatureCard feature={feature} />
          </li>
        ))}
      </FeatureCarousel>
      <ul
        role="list"
        className="mx-auto mt-20 hidden max-w-2xl grid-cols-1 gap-16 px-4 sm:grid-cols-2 sm:px-6 lg:grid lg:max-w-[100rem] lg:grid-cols-4 lg:gap-16 lg:px-10"
      >
        {features.map((feature) => (
          <li key={feature.title}>
            <FeatureCard feature={feature} />
          </li>
        ))}
      </ul>
    </section>
  )
}
