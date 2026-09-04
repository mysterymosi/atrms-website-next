'use client'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'

import { Container } from '@/components/Container'
import { SectionHead } from '@/components/SectionHead'

const faqs = [
  {
    question: 'What is Atlas?',
    answer:
      'Atlas is a GovTech platform for managing government revenue, tax, payments and compliance from one connected system.',
  },
  {
    question: 'Who is Atlas for?',
    answer:
      'Revenue authorities, government agencies, and public-sector organisations that collect or manage revenue, along with financial institutions that support them.',
  },
  {
    question: 'Can Atlas integrate with existing systems?',
    answer:
      'Yes. Atlas connects with banks, payment service providers, government systems, identity platforms, business registries and notification services already in use.',
  },
  {
    question: 'Can taxpayers use Atlas?',
    answer:
      'Atlas is an operational platform for revenue authority staff. Taxpayer-facing touchpoints, such as payment and notification channels, connect through Atlas rather than requiring taxpayers to log in directly.',
  },
  {
    question: 'Is Atlas configurable?',
    answer:
      "Yes. Workflows, forms and approval rules can be configured to match your agency's structure, without custom development.",
  },
  {
    question: 'How long does implementation take?',
    answer:
      "Timelines depend on scope and the number of modules involved. A single-module rollout typically moves faster than a full-platform deployment. We'll outline a realistic timeline during your demo.",
  },
  {
    question: 'What does support look like after go-live?',
    answer:
      'Every deployment includes a named point of contact for support, along with an agreed response process for operational issues.',
  },
  {
    question: 'How is Atlas priced?',
    answer:
      "Pricing is based on scope: the modules deployed and the scale of your operation. Request a demo and we'll share a proposal tailored to your agency.",
  },
]

export function Faqs() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="py-16 md:py-24">
      <Container>
        <SectionHead kicker="FAQ" title="Frequently asked questions." titleId="faq-title">
          Answers to the questions we hear most from revenue authorities and
          public-sector teams.
        </SectionHead>
        <div className="max-w-[820px]">
          {faqs.map((faq, index) => (
            <Disclosure as="div" key={faq.question} defaultOpen={index === 0}>
              {({ open }) => (
                <div className="border-b border-border py-5">
                  <DisclosureButton className="flex w-full items-center justify-between gap-5 text-left text-[16.5px] font-semibold text-navy">
                    <span>{faq.question}</span>
                    <span
                      className={`font-mono text-xl text-blue transition-transform duration-200 ${
                        open ? 'rotate-45' : ''
                      }`}
                    >
                      +
                    </span>
                  </DisclosureButton>
                  <DisclosurePanel className="mt-3.5 max-w-[640px] text-[14.5px] text-muted">
                    {faq.answer}
                  </DisclosurePanel>
                </div>
              )}
            </Disclosure>
          ))}
        </div>
      </Container>
    </section>
  )
}
