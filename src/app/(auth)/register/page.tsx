import { type Metadata } from 'next'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'
import { SlimLayout } from '@/components/SlimLayout'

export const metadata: Metadata = {
  title: 'Request a Demo',
}

export default function Register() {
  return (
    <SlimLayout>
      <div className="flex">
        <Link href="/" aria-label="Home">
          <Logo className="h-10 w-auto" />
        </Link>
      </div>
      <h2 className="mt-20 text-lg font-semibold text-primary">
        Request a demo
      </h2>
      <p className="mt-2 text-sm text-primary/80">
        Tell us about your organisation and we’ll show you how Atlas can
        support your revenue operations.
      </p>
      <form
        action="#"
        className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2"
      >
        <TextField
          label="First name"
          name="first_name"
          type="text"
          autoComplete="given-name"
          required
        />
        <TextField
          label="Last name"
          name="last_name"
          type="text"
          autoComplete="family-name"
          required
        />
        <TextField
          className="col-span-full"
          label="Email address"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
        <TextField
          className="col-span-full"
          label="Organisation"
          name="organisation"
          type="text"
          autoComplete="organization"
          required
        />
        <SelectField
          className="col-span-full"
          label="Organisation type"
          name="organisation_type"
        >
          <option>Revenue authority</option>
          <option>Government agency</option>
          <option>Financial institution</option>
          <option>Other public-sector organisation</option>
        </SelectField>
        <div className="col-span-full">
          <Button type="submit" variant="solid" color="primary" className="w-full">
            <span>
              Request a demo <span aria-hidden="true">&rarr;</span>
            </span>
          </Button>
        </div>
      </form>
    </SlimLayout>
  )
}
