import { Container } from '@/components/Container'
import HowItWorksBoard, { type Step } from '@/components/ui/how-it-works'

const primaryColors = {
  bg: 'bg-primary-muted',
  text: 'text-primary',
  border: 'border-primary/20',
}

const secondaryColors = {
  bg: 'bg-secondary-muted',
  text: 'text-secondary-active',
  border: 'border-secondary/20',
}

const steps: Step[] = [
  {
    title: 'Register',
    description: 'Create taxpayer records.',
    colors: primaryColors,
  },
  {
    title: 'Assess',
    description: 'Calculate tax obligations.',
    colors: secondaryColors,
  },
  {
    title: 'Collect',
    description: 'Receive and track payments.',
    colors: primaryColors,
  },
  {
    title: 'Reconcile',
    description: 'Match collections and records.',
    colors: secondaryColors,
  },
  {
    title: 'Monitor',
    description: 'Track revenue and compliance.',
    colors: primaryColors,
  },
]

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-label="How Atlas works"
      className="overflow-x-hidden bg-supporting"
    >
      <Container className="pt-20 sm:pt-32">
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-primary sm:text-4xl lg:text-6xl">
            From registration to revenue.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-primary/80 ">
            A connected flow that takes governments from taxpayer onboarding
            through to collection, reconciliation and oversight.
          </p>
        </div>
      </Container>
      <HowItWorksBoard features={steps} className="pt-10 pb-20 md:pt-16 md:pb-24" />
    </section>
  )
}
