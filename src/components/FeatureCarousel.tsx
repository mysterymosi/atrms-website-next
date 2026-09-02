'use client'

import { useCallback, useRef, type ReactNode } from 'react'

function ArrowLeftIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-5">
      <path
        d="M19 12H5M11 18l-6-6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-5">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const arrowClassName =
  'absolute top-1/2 z-10 flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-supporting text-black shadow-[0_8px_24px_rgba(0,0,0,0.14)]'

export function FeatureCarousel({ children }: { children: ReactNode }) {
  const scrollerRef = useRef<HTMLUListElement>(null)

  const scroll = useCallback((direction: -1 | 1) => {
    const scroller = scrollerRef.current
    if (!scroller) return

    const cards = [
      ...scroller.querySelectorAll<HTMLElement>('[data-feature-card]'),
    ]
    if (cards.length === 0) return

    const viewportCenter = scroller.scrollLeft + scroller.clientWidth / 2
    let current = 0
    let closest = Infinity

    cards.forEach((card, index) => {
      const center = card.offsetLeft + card.offsetWidth / 2
      const distance = Math.abs(center - viewportCenter)
      if (distance < closest) {
        closest = distance
        current = index
      }
    })

    const next = (current + direction + cards.length) % cards.length
    cards[next].scrollIntoView({
      behavior: 'smooth',
      inline: 'start',
      block: 'nearest',
    })
  }, [])

  return (
    <div className="relative mt-12 overflow-hidden py-6 lg:hidden">
      <ul
        ref={scrollerRef}
        className="flex w-full min-w-0 snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain py-2 pl-4 pr-0 scroll-pl-4 [scrollbar-width:none] [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </ul>
      <button
        type="button"
        aria-label="Previous feature"
        onClick={() => scroll(-1)}
        className={`${arrowClassName} left-2`}
      >
        <ArrowLeftIcon />
      </button>
      <button
        type="button"
        aria-label="Next feature"
        onClick={() => scroll(1)}
        className={`${arrowClassName} right-2`}
      >
        <ArrowRightIcon />
      </button>
    </div>
  )
}
