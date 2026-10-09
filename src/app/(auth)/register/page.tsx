import { type Metadata } from 'next'
import { redirect } from 'next/navigation'

import { DEMO_CALENDLY_URL } from '@/lib/links'

export const metadata: Metadata = {
  title: 'Request a Demo',
}

export default function Register() {
  redirect(DEMO_CALENDLY_URL)
}
