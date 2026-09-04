import type { ReactNode } from 'react'

export function SectionHead({
  kicker,
  title,
  titleId,
  children,
}: {
  kicker: string
  title: string
  titleId?: string
  children?: ReactNode
}) {
  return (
    <div className="mb-12 max-w-[620px]">
      <p className="mb-3.5 font-mono text-[13px] text-blue">{kicker}</p>
      <h2
        id={titleId}
        className="font-display text-[28px] font-bold tracking-[-0.01em] text-navy sm:text-4xl"
      >
        {title}
      </h2>
      {children ? (
        <p className="mt-3.5 text-[16.5px] text-muted">{children}</p>
      ) : null}
    </div>
  )
}
