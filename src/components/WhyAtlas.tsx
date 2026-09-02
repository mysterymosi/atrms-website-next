import { Container } from '@/components/Container'
import { cn } from '@/lib/utils'

function SimpleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-8">
      <path
        d="M4 7h16M4 12h10M4 17h7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function ConnectedIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-8">
      <circle cx="12" cy="5.5" r="2.25" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="5.5" cy="18" r="2.25" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="18.5" cy="18" r="2.25" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M10.6 7.1 6.8 16M13.4 7.1l3.8 8.9M7.8 18h8.4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function ConfigurableIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-8">
      <path
        d="M5 8h8M16 8h3M5 16h3M10 16h9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="14" cy="8" r="2.25" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="9" cy="16" r="2.25" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function ScalableIcon() {
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

const reasons = [
  {
    number: '01',
    name: 'Simple',
    description: 'Make complex processes easier.',
    cardClass: 'bg-primary-muted rotate-[1.5deg]',
    iconClass: 'text-primary',
    icon: SimpleIcon,
  },
  {
    number: '02',
    name: 'Connected',
    description: 'Bring systems and data together.',
    cardClass: 'bg-secondary-muted -rotate-[1.5deg]',
    iconClass: 'text-secondary',
    icon: ConnectedIcon,
  },
  {
    number: '03',
    name: 'Configurable',
    description: 'Adapt to different government requirements.',
    cardClass: 'bg-primary/10 -rotate-[1.5deg]',
    iconClass: 'text-primary',
    icon: ConfigurableIcon,
  },
  {
    number: '04',
    name: 'Scalable',
    description: 'Built to grow with your organisation.',
    cardClass: 'bg-neutral-200 rotate-[1.5deg]',
    iconClass: 'text-neutral-800',
    icon: ScalableIcon,
  },
]

export function WhyAtlas() {
  return (
    <section
      id="why-atlas"
      aria-label="Why governments choose Atlas"
      className="bg-supporting py-20 sm:py-28 lg:py-32"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-sm font-semibold tracking-[0.2em] text-secondary uppercase">
            Why Atlas
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-primary sm:text-5xl lg:text-6xl">
            Built for the way{' '}
            <span className="relative whitespace-nowrap">
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute top-2/3 left-0 h-[0.58em] w-full fill-secondary/70"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
              </svg>
              <span className="relative">government works.</span>
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-primary/70 sm:text-xl">
            Atlas is designed for public-sector complexity — without making
            everyday work harder than it needs to be.
          </p>
        </div>

        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-4 lg:gap-10"
        >
          {reasons.map((reason) => (
            <li key={reason.name} className="min-w-0">
              <div
                className={cn(
                  'relative flex min-h-[22rem] flex-col justify-between overflow-hidden rounded-3xl p-7 sm:min-h-[24rem] sm:p-8',
                  reason.cardClass,
                )}
              >
                <div className="flex items-start justify-between">
                  <span
                    aria-hidden="true"
                    className="font-display text-5xl font-semibold leading-none text-black/15 sm:text-6xl"
                  >
                    {reason.number}
                  </span>
                  <span className={reason.iconClass}>
                    <reason.icon />
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-black sm:text-3xl">
                    {reason.name}
                  </h3>
                  <p className="mt-3 text-base leading-snug text-black/80">
                    {reason.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
