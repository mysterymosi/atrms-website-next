import { Container } from '@/components/Container'
import { SectionHead } from '@/components/SectionHead'

const collectionStats = [
  {
    label: "TODAY'S COLLECTIONS",
    figure: '₦128,402,918',
    delta: '+6.2% vs. yesterday',
    tone: 'up',
  },
  {
    label: "THIS MONTH'S COLLECTIONS",
    figure: '₦2,940,512,300',
    delta: '+4.8% vs. last month',
    tone: 'up',
  },
  {
    label: "THIS YEAR'S COLLECTIONS",
    figure: '₦18,204,760,900',
    delta: '82% of annual target',
    tone: 'flat',
  },
]

const trendHeights = [35, 48, 42, 60, 55, 70, 66, 80, 74, 88, 82, 96]

function Delta({ tone, children }: { tone: string; children: string }) {
  return (
    <span
      className={`inline-block rounded-full px-2.5 py-0.5 font-mono text-xs ${
        tone === 'up'
          ? 'bg-secondary/18 text-[#7fe8d6]'
          : 'bg-[rgba(255,196,110,0.18)] text-[#ffd48a]'
      }`}
    >
      {children}
    </span>
  )
}

export function Dashboard() {
  return (
    <section id="analytics" className="bg-surface py-16 md:py-24">
      <Container>
        <SectionHead kicker="Analytics" title="One dashboard for every number that matters.">
          From today&apos;s collections through to year-to-date performance, and
          the taxpayer base behind them, Atlas gives revenue authorities a
          single reporting layer instead of a separate reporting exercise.
        </SectionHead>
        <div className="rounded-3xl bg-navy p-7 text-supporting lg:p-11">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-5">
            <div>
              <h3 className="font-display text-[28px] font-bold text-supporting">
                Revenue & taxpayer overview
              </h3>
              <p className="mt-2 max-w-[460px] text-[14.5px] text-[#b9c8ec]">
                Illustrative reporting view. Figures update in real time inside
                the platform.
              </p>
            </div>
            <div className="flex gap-2 font-mono text-xs">
              {['Today', 'This month', 'This year'].map((tab, index) => (
                <span
                  key={tab}
                  className={`rounded-full px-3 py-1.5 ${
                    index === 0
                      ? 'bg-secondary/20 text-[#7fe8d6]'
                      : 'bg-white/10 text-[#b9c8ec]'
                  }`}
                >
                  {tab}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-4 grid gap-4 md:grid-cols-3">
            {collectionStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[14px] border border-white/10 border-l-[3px] border-l-secondary bg-white/5 p-[22px] transition hover:bg-white/10"
              >
                <p className="mb-2.5 font-mono text-xs tracking-[0.02em] text-[#9fb3e0]">
                  {stat.label}
                </p>
                <p className="mb-1.5 font-display text-[26px] font-semibold">
                  {stat.figure}
                </p>
                <Delta tone={stat.tone}>{stat.delta}</Delta>
              </div>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-[14px] border border-white/10 border-l-[3px] border-l-[#5b9bff] bg-white/5 p-[22px]">
              <div className="flex items-start justify-between">
                <p className="mb-2.5 font-mono text-xs tracking-[0.02em] text-[#9fb3e0]">
                  INDIVIDUAL TAXPAYERS
                </p>
                <span className="flex size-[34px] items-center justify-center rounded-[9px] bg-white/10">
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="size-4">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
                  </svg>
                </span>
              </div>
              <p className="mb-1.5 font-display text-2xl font-semibold">142,830</p>
              <Delta tone="up">+1,204 this month</Delta>
            </div>
            <div className="rounded-[14px] border border-white/10 border-l-[3px] border-l-[#5b9bff] bg-white/5 p-[22px]">
              <div className="flex items-start justify-between">
                <p className="mb-2.5 font-mono text-xs tracking-[0.02em] text-[#9fb3e0]">
                  CORPORATE TAXPAYERS
                </p>
                <span className="flex size-[34px] items-center justify-center rounded-[9px] bg-white/10">
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="size-4">
                    <rect x="4" y="3" width="16" height="18" rx="2" />
                    <path d="M9 8h6M9 12h6M9 16h3" />
                  </svg>
                </span>
              </div>
              <p className="mb-1.5 font-display text-2xl font-semibold">18,402</p>
              <Delta tone="up">+96 this month</Delta>
            </div>
            <div className="flex flex-col rounded-[14px] border border-white/10 border-l-[3px] border-l-secondary bg-white/5 p-[22px]">
              <p className="mb-2.5 font-mono text-xs tracking-[0.02em] text-[#9fb3e0]">
                MONTHLY COLLECTIONS TREND
              </p>
              <div className="mt-auto flex h-16 items-end gap-1.5">
                {trendHeights.map((height, index) => (
                  <div
                    key={index}
                    className="flex-1 rounded-t-[5px] bg-linear-to-b from-[#7fe8d6] to-secondary"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
