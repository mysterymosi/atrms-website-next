import { Container } from '@/components/Container'
import { SectionHead } from '@/components/SectionHead'

const steps = [
  { number: '1', title: 'Register', description: 'Create taxpayer records.' },
  { number: '2', title: 'Assess', description: 'Calculate tax obligations.' },
  { number: '3', title: 'Collect', description: 'Receive and track payments.' },
  { number: '4', title: 'Reconcile', description: 'Match collections and records.' },
  { number: '5', title: 'Monitor', description: 'Track revenue and compliance.' },
]

export function HowItWorks() {
  return (
    <section id="workflow" className="bg-surface py-16 md:py-24">
      <Container>
        <SectionHead kicker="How it works" title="From registration to revenue.">
          A connected flow that takes governments from taxpayer onboarding
          through to collection, reconciliation and oversight.
        </SectionHead>
        <ol className="mt-5 flex flex-col gap-7 min-[900px]:flex-row min-[900px]:gap-0">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="relative flex flex-1 flex-col items-start pl-[46px] min-[900px]:pr-6 min-[900px]:pl-0"
            >
              {index < steps.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="absolute top-[18px] right-[-24px] left-9 hidden h-0.5 bg-[repeating-linear-gradient(90deg,var(--color-border)_0_6px,transparent_6px_12px)] min-[900px]:block"
                />
              ) : null}
              <span className="absolute top-0 left-0 z-[2] flex size-9 items-center justify-center rounded-full bg-surface-1 font-mono text-[13px] font-semibold text-blue min-[900px]:static min-[900px]:mb-[18px]">
                {step.number}
              </span>
              <h3 className="mb-1.5 font-display text-[16.5px] font-bold text-navy">
                {step.title}
              </h3>
              <p className="text-[13.5px] text-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
