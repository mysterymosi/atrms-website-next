import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-primary py-32"
    >
      <Image
        className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl tracking-tight text-supporting sm:text-4xl">
            Ready to build better government systems?
          </h2>
          <p className="mt-4 text-lg tracking-tight text-supporting">
            See how Atlas can support your organisation.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-4">
            <Button href="/register" color="white">
              Request a Demo
            </Button>
            <Button href="#contact" variant="outline" color="white">
              Contact Us
              <span aria-hidden="true" className="ml-2">
                →
              </span>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
