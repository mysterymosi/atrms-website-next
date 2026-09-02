import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { cn } from '@/lib/utils'

const focusAreas = [
  {
    name: 'Revenue administration',
    cardClass: 'bg-primary-muted rotate-[1.5deg]',
  },
  {
    name: 'Compliance',
    cardClass: 'bg-secondary-muted -rotate-[1.5deg]',
  },
  {
    name: 'Public-sector operations',
    cardClass: 'bg-neutral-200 rotate-[1.5deg]',
  },
]

export function About() {
  return (
    <section
      id="about"
      aria-label="About Atlas"
      className="bg-primary py-20 sm:py-28 lg:py-32"
    >
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="font-display text-sm font-semibold tracking-[0.2em] text-secondary uppercase">
              About
            </p>
            <h2 className="mt-4 max-w-lg font-display text-4xl font-semibold tracking-tight text-supporting sm:text-5xl lg:text-6xl">
              Technology for{' '}
              <span className="relative whitespace-nowrap">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 418 42"
                  className="absolute top-2/3 left-0 h-[0.58em] w-full fill-secondary/70"
                  preserveAspectRatio="none"
                >
                  <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
                </svg>
                <span className="relative">better government.</span>
              </span>
            </h2>
            <p className="mt-6 max-w-md text-lg tracking-tight text-supporting/80 sm:text-xl">
              Atlas builds digital infrastructure that helps governments improve
              revenue administration, compliance and public-sector operations.
            </p>
            <div className="mt-10">
              <Button href="/register" variant="outline" color="white">
                About Atlas
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </Button>
            </div>
          </div>

          <ul role="list" className="flex flex-col gap-5 sm:gap-6">
            {focusAreas.map((area, index) => (
              <li key={area.name}>
                <div
                  className={cn(
                    'flex min-h-[7.5rem] items-end rounded-3xl px-7 py-6 sm:min-h-[8.5rem] sm:px-8',
                    area.cardClass,
                  )}
                >
                  <div>
                    <p className="font-display text-sm font-semibold tracking-[0.2em] text-black/40">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-semibold text-black sm:text-3xl">
                      {area.name}
                    </h3>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
