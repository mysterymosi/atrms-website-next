import { Container } from '@/components/Container'

const principles = [
  {
    name: 'Security',
    description: 'Protect revenue data with controls built into the platform.',
  },
  {
    name: 'Access Control',
    description: 'Give the right people the right access, and nothing more.',
  },
  {
    name: 'Audit Trails',
    description: 'Keep a clear record of activity across processes and users.',
  },
  {
    name: 'Data Protection',
    description: 'Handle sensitive taxpayer and payment data with care.',
  },
  {
    name: 'Backups',
    description: 'Keep operations recoverable when something goes wrong.',
  },
  {
    name: 'Reliable Infrastructure',
    description: 'Run on infrastructure designed for continuous public service.',
  },
]

export function Security() {
  return (
    <section
      id="security"
      aria-label="Atlas security and trust"
      className="pt-20 pb-14 sm:pt-32 sm:pb-20 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-primary sm:text-4xl">
            Built with trust at the core.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-primary/80">
            Atlas is designed around the controls public-sector organisations
            expect.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3"
        >
          {principles.map((principle) => (
            <li key={principle.name}>
              <h3 className="font-display text-lg text-primary">
                {principle.name}
              </h3>
              <p className="mt-2 text-sm text-primary/70">
                {principle.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
