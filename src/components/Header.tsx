'use client'

import Link from 'next/link'
import {
  Popover,
  PopoverButton,
  PopoverBackdrop,
  PopoverPanel,
} from '@headlessui/react'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Logo } from '@/components/Logo'

const navigation = [
  { name: 'Platform', href: '#platform' },
  { name: 'Solutions', href: '#solutions' },
  { name: 'How it works', href: '#workflow' },
  { name: 'Security', href: '#security' },
  { name: 'FAQ', href: '#faq' },
]

function Brand() {
  return (
    <Link href="/" className="flex items-center gap-2.5 font-display text-[19px] font-bold text-navy">
      <Logo className="size-[30px] object-contain" width={30} height={30} />
      Atlas
    </Link>
  )
}

function MobileNavIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-navy"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx('origin-center transition', open && 'scale-90 opacity-0')}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx('origin-center transition', !open && 'scale-90 opacity-0')}
      />
    </svg>
  )
}

function MobileNavigation() {
  return (
    <Popover>
      <PopoverButton
        className="relative z-10 flex h-8 w-8 items-center justify-center focus:not-data-focus:outline-hidden"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </PopoverButton>
      <PopoverBackdrop
        transition
        className="fixed inset-0 bg-navy/20 duration-150 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in"
      />
      <PopoverPanel
        transition
        className="absolute inset-x-0 top-full mt-px flex origin-top flex-col border-b border-border bg-supporting p-6 data-closed:opacity-0 data-enter:duration-150 data-enter:ease-out data-leave:duration-100 data-leave:ease-in"
      >
        {navigation.map((item) => (
          <PopoverButton
            key={item.name}
            as="a"
            href={item.href}
            className="py-2 text-[15px] font-medium text-ink"
          >
            {item.name}
          </PopoverButton>
        ))}
        <PopoverButton
          as="a"
          href="#contact"
          className="py-2 text-[15px] font-medium text-navy"
        >
          Contact sales
        </PopoverButton>
        <Button href="/register" className="mt-3 px-4 py-2 text-[13.5px]">
          Request a demo
        </Button>
      </PopoverPanel>
    </Popover>
  )
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 shrink-0 border-b border-border bg-background/92 backdrop-blur-[10px] backdrop-saturate-[180%]">
      <nav className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-4 lg:px-10">
        <Brand />
        <div className="hidden items-center gap-[30px] min-[900px]:flex">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[15px] font-medium text-ink/80 transition hover:text-blue"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden text-sm font-semibold text-navy/85 hover:text-navy min-[900px]:inline"
          >
            Contact sales
          </a>
          <Button href="/register" className="px-4 py-[9px] text-[13.5px]">
            Request a demo
          </Button>
          <div className="min-[900px]:hidden">
            <MobileNavigation />
          </div>
        </div>
      </nav>
    </header>
  )
}
