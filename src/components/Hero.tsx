import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

const bars = [
  { height: '38%', className: 'bg-linear-to-b from-[#4d7de8] to-blue' },
  { height: '55%', className: 'bg-linear-to-b from-[#4d7de8] to-blue' },
  { height: '70%', className: 'bg-linear-to-b from-[#38e0c4] to-secondary' },
  { height: '60%', className: 'bg-linear-to-b from-[#4d7de8] to-blue' },
  { height: '88%', className: 'bg-linear-to-b from-[#38e0c4] to-secondary' },
  { height: '76%', className: 'bg-linear-to-b from-[#38e0c4] to-secondary' },
  { height: '96%', className: 'bg-linear-to-b from-[#38e0c4] to-secondary' },
]

const rows = [
  { name: 'Lagos Central: PAYE reconciliation', status: 'Matched', tone: 'ok' },
  { name: 'Business registry sync', status: 'Up to date', tone: 'ok' },
  { name: 'Q3 compliance review, 214 accounts', status: 'Due Friday', tone: 'due' },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-[76px] pb-14">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[220px] -right-[120px] size-[520px] rounded-full bg-[radial-gradient(circle,rgba(23,104,224,0.16),transparent_70%)] blur-[70px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[200px] -left-[140px] size-[420px] rounded-full bg-[radial-gradient(circle,rgba(14,182,160,0.14),transparent_70%)] blur-[70px]"
      />
      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div>
            <p className="mb-[18px] font-mono text-[13px] font-medium tracking-[0.02em] text-secondary">
              GovTech · Revenue Management System (RMS)
            </p>
            <h1 className="font-display text-[36px] font-bold tracking-[-0.01em] text-navy sm:text-[52px] lg:leading-14 leading-10">
              Smarter systems for{' '}
              <span className="text-secondary">better government.</span>
            </h1>
            <p className="mt-5 max-w-[480px] text-lg text-muted">
              Atlas is a revenue management system that connects taxpayer
              registration, assessment, tax accounts, collection and
              reconciliation in one platform, so revenue authorities always know
              where things stand.
            </p>
            <div className="mt-8 flex flex-wrap gap-3.5">
              <Button href="/register">Request a demo</Button>
              <Button href="#workflow" variant="outline">
                See how it works
              </Button>
            </div>
            <p className="mt-4 font-mono text-[13.5px] text-muted">
              No obligation · We reply within one business day with next steps
            </p>
            <div className="mt-11 flex flex-wrap gap-7">
              {[
                'Modular: adopt one module or the full platform',
                'Designed to sit alongside your existing systems',
                'Built for public-sector data volumes',
              ].map((item) => (
                <div key={item} className="flex max-w-[190px] items-start gap-2.5">
                  <span className="mt-[7px] size-[7px] shrink-0 rounded-full bg-secondary" />
                  <span className="text-[13.5px] text-muted">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[20px] bg-linear-to-br from-navy to-navy-2 p-[26px] text-supporting shadow-[0_30px_60px_-20px_rgba(11,42,99,0.45)]">
            <div className="mb-[18px] flex items-center justify-between">
              <span className="font-mono text-xs text-[#9fb3e0]">
                TODAY&apos;S COLLECTIONS
              </span>
              <span className="rounded-full bg-secondary/18 px-2.5 py-1 font-mono text-[11px] text-[#7fe8d6]">
                LIVE
              </span>
            </div>
            <p className="font-display text-[34px] font-semibold">₦128,402,918</p>
            <p className="mt-1 mb-5 text-[12.5px] text-[#a9bae2]">
              +6.2% vs. same period last month
            </p>
            <div className="mb-[22px] flex h-[88px] items-end gap-2">
              {bars.map((bar, index) => (
                <div
                  key={index}
                  className={`flex-1 rounded-t-[5px] rounded-b-[2px] ${bar.className}`}
                  style={{ height: bar.height }}
                />
              ))}
            </div>
            <div className="flex flex-col gap-[11px] border-t border-white/12 pt-4">
              {rows.map((row) => (
                <div
                  key={row.name}
                  className="flex items-center justify-between text-[12.5px]"
                >
                  <span className="text-[#dfe8fb]">{row.name}</span>
                  <span
                    className={`rounded-md px-2 py-0.5 font-mono text-[11px] ${row.tone === 'ok'
                      ? 'bg-secondary/18 text-[#7fe8d6]'
                      : 'bg-[rgba(255,196,110,0.18)] text-[#ffd48a]'
                      }`}
                  >
                    {row.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
