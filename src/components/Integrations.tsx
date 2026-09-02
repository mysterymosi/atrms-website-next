'use client'

import { useLayoutEffect, useRef } from 'react'
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'motion/react'

import { Container } from '@/components/Container'
import { cn } from '@/lib/utils'

function BankIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-16 lg:size-20">
      <path d="M12 3 3 8v2h18V8L12 3ZM5 12v6H3v2h18v-2h-2v-6h-2v6h-4v-6h-2v6H7v-6H5Z" />
    </svg>
  )
}

function CardIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-16 lg:size-20">
      <path d="M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6Zm2 2v2h14V8H5Zm0 6h6v2H5v-2Z" />
    </svg>
  )
}

function LandmarkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-16 lg:size-20">
      <path d="M12 3 2 8v2h20V8L12 3ZM5 12h2v6H5v-6Zm4 0h2v6H9v-6Zm4 0h2v6h-2v-6Zm4 0h2v6h-2v-6ZM3 20h18v2H3v-2Z" />
    </svg>
  )
}

function IdentityIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-16 lg:size-20">
      <path d="M12 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8ZM4 20a8 8 0 0 1 16 0 1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z" />
    </svg>
  )
}

function RegistryIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-16 lg:size-20">
      <path d="M7 3h8l5 5v13a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm7 1.5V9h4.5L14 4.5ZM8 12h8v2H8v-2Zm0 4h8v2H8v-2Z" />
    </svg>
  )
}

function BellIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-16 lg:size-20">
      <path d="M12 2a6 6 0 0 1 6 6v3.3l1.6 2.8A1 1 0 0 1 18.7 16H5.3a1 1 0 0 1-.9-1.9L6 11.3V8a6 6 0 0 1 6-6Zm-2.5 16h5a2.5 2.5 0 0 1-5 0Z" />
    </svg>
  )
}

const systems = [
  {
    title: 'Banks',
    description: 'Connect banking rails for collections, settlements and statements.',
    cardClass: 'bg-primary-muted rotate-[2deg]',
    iconClass: 'bg-primary text-supporting',
    icon: BankIcon,
  },
  {
    title: 'Payment Gateways',
    description: 'Accept payments through the channels taxpayers already use.',
    cardClass: 'bg-secondary-muted -rotate-[2deg]',
    iconClass: 'bg-secondary text-supporting',
    icon: CardIcon,
  },
  {
    title: 'Government Systems',
    description: 'Exchange data with the platforms your agencies already run.',
    cardClass: 'bg-primary-muted rotate-[2deg]',
    iconClass: 'bg-primary text-supporting',
    icon: LandmarkIcon,
  },
  {
    title: 'Identity Platforms',
    description: 'Verify taxpayers against national identity and KYC services.',
    cardClass: 'bg-neutral-200 -rotate-[2deg]',
    iconClass: 'bg-neutral-800 text-supporting',
    icon: IdentityIcon,
  },
  {
    title: 'Business Registries',
    description: 'Keep taxpayer records aligned with registered business data.',
    cardClass: 'bg-primary-muted rotate-[2deg]',
    iconClass: 'bg-primary text-supporting',
    icon: RegistryIcon,
  },
  {
    title: 'Notification Services',
    description: 'Send receipts, reminders and notices through existing channels.',
    cardClass: 'bg-secondary-muted -rotate-[2deg]',
    iconClass: 'bg-secondary text-supporting',
    icon: BellIcon,
  },
]

function IntegrationCard({
  system,
  className,
}: {
  system: (typeof systems)[number]
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex min-h-[26rem] w-[min(22rem,82vw)] flex-col justify-between rounded-3xl p-8 sm:min-h-[32rem] sm:w-[28rem] sm:p-10 lg:min-h-[36rem] lg:w-[32rem] lg:p-12',
        system.cardClass,
        className,
      )}
    >
      <h3 className="font-display text-2xl font-semibold leading-7 text-black sm:text-3xl sm:leading-8 lg:text-4xl">
        {system.title}
      </h3>
      <div className="flex flex-1 items-center justify-center py-10 sm:py-12">
        <div
          className={cn(
            'flex size-28 items-center justify-center rounded-full border-[6px] border-supporting sm:size-36 lg:size-40',
            system.iconClass,
          )}
        >
          <system.icon />
        </div>
      </div>
      <p className="text-base font-medium leading-snug text-black sm:text-lg lg:text-xl">
        {system.description}
      </p>
    </div>
  )
}

function SectionCopy() {
  return (
    <div className="mx-auto max-w-7xl px-6 text-center">
      <h2 className="font-display text-5xl font-semibold tracking-tight text-primary sm:text-7xl lg:text-8xl xl:text-9xl">
        Connect the systems you{' '}
        <span className="relative whitespace-nowrap">
          <svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute top-2/3 left-0 h-[0.58em] w-full fill-secondary/70"
            preserveAspectRatio="none"
          >
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
          </svg>
          <span className="relative">already use.</span>
        </span>
      </h2>
      <p className="mt-8 text-2xl tracking-tight text-primary/80 sm:text-3xl lg:text-4xl">
        Atlas can connect with the infrastructure around your revenue operation.
      </p>
    </div>
  )
}

function IntegrationsGrid() {
  return (
    <section
      id="integrations"
      aria-label="Atlas integrations"
      className="bg-primary/5 py-20 sm:py-32"
    >
      <Container>
        <SectionCopy />
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3"
        >
          {systems.map((system) => (
            <li key={system.title}>
              <IntegrationCard system={system} />
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-12 max-w-2xl text-center font-display text-lg tracking-tight text-primary">
          One platform. Connected systems. Better data.
        </p>
      </Container>
    </section>
  )
}

export function Integrations() {
  const prefersReducedMotion = useReducedMotion()
  const containerRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLUListElement>(null)
  const travelRef = useRef(0)

  const { scrollY } = useScroll()

  const x = useTransform(scrollY, (y) => {
    const section = containerRef.current
    const travel = travelRef.current
    if (!section || travel <= 0) return 0

    const range = section.offsetHeight - window.innerHeight
    if (range <= 0) return 0

    const progress = (y - section.offsetTop) / range
    const start = 0.04
    const end = 0.72
    const t = Math.min(1, Math.max(0, (progress - start) / (end - start)))
    return -travel * t
  })

  useLayoutEffect(() => {
    const track = trackRef.current
    if (!track) return

    const measure = () => {
      travelRef.current = Math.max(track.scrollWidth - window.innerWidth, 0)
    }

    measure()
    window.dispatchEvent(new Event('scroll'))
    const observer = new ResizeObserver(measure)
    observer.observe(track)
    window.addEventListener('resize', measure)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [prefersReducedMotion])

  if (prefersReducedMotion) {
    return <IntegrationsGrid />
  }

  return (
    <section
      id="integrations"
      ref={containerRef}
      aria-label="Atlas integrations"
      className="relative h-[440svh] bg-primary/5 sm:h-[500svh]"
    >
      <div className="sticky top-0 isolate flex h-svh items-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
          <SectionCopy />
        </div>

        <motion.ul
          ref={trackRef}
          role="list"
          style={{ x }}
          className="relative z-10 flex w-max shrink-0 items-center gap-8 py-8 pl-[100vw] pr-[12vw] will-change-transform sm:gap-10 lg:gap-14"
        >
          {systems.map((system) => (
            <li key={system.title} className="shrink-0">
              <IntegrationCard system={system} />
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
