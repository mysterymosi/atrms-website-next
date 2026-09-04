const items = [
  'Built for modern government',
  'Revenue Authorities',
  'Government Agencies',
  'Financial Institutions',
  'Public Sector',
]

function Segment() {
  return (
    <div className="flex items-center gap-3 pr-3 whitespace-nowrap">
      {items.map((item) => (
        <span key={item} className="contents">
          <span className="font-mono text-[13.5px] tracking-[0.02em] text-navy/65">
            {item}
          </span>
          <span className="font-mono text-[13.5px] text-secondary">•</span>
        </span>
      ))}
    </div>
  )
}

export function TrustMarquee() {
  return (
    <div className="overflow-hidden border-y border-border bg-surface py-4">
      <div className="flex w-max animate-marquee motion-reduce:animate-none">
        <Segment />
        <Segment />
      </div>
    </div>
  )
}
