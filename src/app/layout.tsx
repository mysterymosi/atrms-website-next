import { type Metadata } from 'next'
import { IBM_Plex_Mono, IBM_Plex_Sans, Space_Grotesk } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Atlas',
    default: 'Atlas - Smarter systems for better government',
  },
  description:
    'Atlas is a revenue management system that connects taxpayer registration, assessment, tax accounts, collection and reconciliation in one platform.',
}

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
  weight: ['500', '600', '700'],
})

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ibm-plex-sans',
  weight: ['400', '500', '600', '700'],
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ibm-plex-mono',
  weight: ['400', '500'],
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
        'h-full scroll-smooth bg-background antialiased',
        spaceGrotesk.variable,
        ibmPlexSans.variable,
        ibmPlexMono.variable,
      )}
    >
      <body className="flex min-h-full flex-col font-sans text-ink">{children}</body>
    </html>
  )
}
