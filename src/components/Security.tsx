import { Button } from '@/components/Button'

const points = [
  {
    title: 'Encryption everywhere',
    description: 'Data is encrypted in transit and at rest across the platform.',
  },
  {
    title: 'Role-based access',
    description: 'Granular permissions so staff only see what their role requires.',
  },
  {
    title: 'Full audit trail',
    description: 'Every record change and assessment is logged and traceable.',
  },
  {
    title: 'Data residency options',
    description: 'Deployment configurations to meet local data-hosting requirements.',
  },
]

export function Security() {
  return (
    <section id="security" className="py-16 md:py-24">
      <div className="mx-6 rounded-3xl bg-navy p-9 text-supporting lg:mx-10 lg:p-14">
        <div className="mx-auto grid max-w-[1160px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div>
            <p className="mb-[18px] font-mono text-[13px] font-medium tracking-[0.02em] text-[#7fe8d6]">
              Security & trust
            </p>
            <h2 className="font-display text-[32px] font-bold tracking-[-0.01em] text-supporting">
              Public revenue deserves serious data protection.
            </h2>
            <p className="mt-3.5 max-w-[420px] text-[15.5px] text-[#b9c8ec]">
              Atlas is built with government-grade data handling in mind, from
              encryption in transit and at rest to strict access controls on
              every account.
            </p>
            <Button href="#contact" variant="outline" color="white" className="mt-6">
              Talk to us about compliance
            </Button>
          </div>
          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {points.map((point) => (
              <li
                key={point.title}
                className="rounded-xl border border-white/10 bg-white/5 p-[18px]"
              >
                <h3 className="mb-1.5 font-display text-[14.5px] font-bold">
                  {point.title}
                </h3>
                <p className="text-[12.5px] text-[#a9bae2]">{point.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
