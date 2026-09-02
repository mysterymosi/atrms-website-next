'use client'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'

import { Container } from '@/components/Container'
import { cn } from '@/lib/utils'

const faqs = [
  {
    question: 'What is Atlas?',
    answer:
      'Atlas is a GovTech platform for managing government revenue, tax, payments and compliance.',
    cardClass: 'bg-primary-muted',
  },
  {
    question: 'Who is Atlas for?',
    answer:
      'Government revenue authorities, agencies and other public-sector organisations.',
    cardClass: 'bg-secondary-muted',
  },
  {
    question: 'Can Atlas integrate with existing systems?',
    answer:
      'Yes. Atlas is designed to connect with relevant external systems and service providers.',
    cardClass: 'bg-primary/10',
  },
  {
    question: 'Can taxpayers use Atlas?',
    answer:
      'Yes. Atlas can provide digital self-service experiences for taxpayers.',
    cardClass: 'bg-neutral-200',
  },
  {
    question: 'Is Atlas configurable?',
    answer:
      'Yes. The platform can be configured around approved government processes and requirements.',
    cardClass: 'bg-primary-muted',
  },
]

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M12 5v14M5 12h14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="bg-supporting py-20 sm:py-28 lg:py-32"
    >
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
          <div className="lg:sticky lg:top-24">
            <p className="font-display text-sm font-semibold tracking-[0.2em] text-secondary uppercase">
              FAQ
            </p>
            <h2
              id="faq-title"
              className="mt-4 max-w-lg font-display text-4xl font-semibold tracking-tight text-primary sm:text-5xl lg:text-6xl"
            >
              Frequently asked{' '}
              <span className="relative whitespace-nowrap">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 418 42"
                  className="absolute top-2/3 left-0 h-[0.58em] w-full fill-secondary/70"
                  preserveAspectRatio="none"
                >
                  <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
                </svg>
                <span className="relative">questions</span>
              </span>
            </h2>
            <p className="mt-6 max-w-md text-lg tracking-tight text-primary/70 sm:text-xl">
              Answers to the questions we hear most from revenue authorities and
              public-sector teams.
            </p>
          </div>

          <ul role="list" className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <li key={faq.question}>
                <Disclosure as="div" defaultOpen={index === 0}>
                  {({ open }) => (
                    <div
                      className={cn(
                        'rounded-3xl px-6 py-5 transition-colors sm:px-7 sm:py-6',
                        open ? faq.cardClass : 'bg-neutral-100',
                      )}
                    >
                      <DisclosureButton className="flex w-full items-start justify-between gap-6 text-left">
                        <span className="flex min-w-0 items-start gap-4">
                          <span
                            aria-hidden="true"
                            className="mt-1 font-display text-sm font-semibold tracking-[0.2em] text-black/35"
                          >
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <span className="font-display text-lg font-semibold text-black sm:text-xl">
                            {faq.question}
                          </span>
                        </span>
                        <PlusIcon
                          className={cn(
                            'mt-1 size-6 shrink-0 text-black transition-transform duration-200',
                            open && 'rotate-45',
                          )}
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="pt-4 pr-10 pl-12 sm:pl-[3.25rem]">
                        <p className="text-base leading-relaxed text-black/80">
                          {faq.answer}
                        </p>
                      </DisclosurePanel>
                    </div>
                  )}
                </Disclosure>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
