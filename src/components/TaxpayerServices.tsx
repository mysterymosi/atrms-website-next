import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

const services = [
  'Register',
  'File',
  'View Assessments',
  'Pay',
  'Track Requests',
  'Get Certificates',
]

export function TaxpayerServices() {
  return (
    <section
      id="taxpayer"
      aria-label="Digital taxpayer services"
      className="pt-20 pb-14 sm:pt-32 sm:pb-20 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-primary sm:text-4xl">
            Government services, made simpler.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-primary/80">
            Taxpayers can access important services digitally.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3"
        >
          {services.map((service) => (
            <li
              key={service}
              className="flex items-center justify-center rounded-2xl bg-supporting px-6 py-8 text-center shadow-xl shadow-primary/10 ring-1 ring-primary/5"
            >
              <span className="font-display text-lg text-primary">
                {service}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-12 text-center">
          <Button href="/register" variant="outline">
            Explore Taxpayer Services
            <span aria-hidden="true" className="ml-2">
              →
            </span>
          </Button>
        </div>
      </Container>
    </section>
  )
}
