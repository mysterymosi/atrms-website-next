import { type Metadata } from 'next'
import { Inter, Lexend, Outfit } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Atlas',
    default: 'Atlas - Smarter systems for better government',
  },
  description:
    'Atlas helps governments manage revenue, tax, payments and compliance from one connected platform.',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-supporting antialiased',
        inter.variable,
        lexend.variable,
        outfit.variable,
      )}
    >
      <body className="flex h-full flex-col">{children}</body>
    </html>
  )
}
