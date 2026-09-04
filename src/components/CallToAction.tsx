import { Button } from '@/components/Button'

export function CallToAction() {
  return (
    <section id="demo" className="pb-16 md:pb-24">
      <div className="mx-6 flex flex-wrap items-center justify-between gap-8 rounded-3xl bg-linear-to-br from-navy to-navy-2 p-9 text-supporting lg:mx-10 lg:p-14">
        <h2 className="max-w-[420px] font-display text-[28px] font-bold tracking-[-0.01em]">
          Ready to see Atlas in one place?
        </h2>
        <div className="flex flex-col items-start gap-3.5">
          <Button href="/register" color="white">
            Request a demo
          </Button>
          <p className="font-mono text-[13px] text-[#b9c8ec]">
            We&apos;ll follow up by email with next steps and a suggested time
            for your demo.
          </p>
        </div>
      </div>
    </section>
  )
}
