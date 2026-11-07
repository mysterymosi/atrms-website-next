import { PortableText, type PortableTextComponents } from 'next-sanity'

import { SanityImage } from '@/components/blog/SanityImage'
import type { BLOG_POST_QUERY_RESULT } from '../../../sanity.types'

type Body = NonNullable<NonNullable<BLOG_POST_QUERY_RESULT>['body']>
type BodyImage = Extract<Body[number], { _type: 'image' }>

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mt-6 text-[17px] leading-[1.75] text-ink/85">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="mt-12 font-display text-[26px] font-bold tracking-[-0.01em] text-navy">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-10 font-display text-xl font-bold text-navy">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="mt-8 font-display text-lg font-semibold text-navy">
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="mt-8 border-l-[3px] border-secondary pl-5 font-display text-xl text-navy">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-6 list-disc space-y-2 pl-6 text-[17px] leading-[1.75] text-ink/85 marker:text-blue">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mt-6 list-decimal space-y-2 pl-6 text-[17px] leading-[1.75] text-ink/85 marker:font-mono marker:text-blue">
        {children}
      </ol>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-ink">{children}</strong>
    ),
    code: ({ children }) => (
      <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-[0.9em] text-navy">
        {children}
      </code>
    ),
    link: ({ value, children }) => {
      const href: string = value?.href ?? '#'
      const external = /^https?:\/\//.test(href)
      return (
        <a
          href={href}
          className="font-medium text-blue underline decoration-blue/30 underline-offset-2 hover:decoration-blue"
          {...(external
            ? { target: '_blank', rel: 'noopener noreferrer' }
            : {})}
        >
          {children}
        </a>
      )
    },
  },
  types: {
    image: ({ value }: { value: BodyImage }) => {
      const dims = value.asset?.metadata?.dimensions
      const width = 1200
      const height = dims ? Math.round((width * dims.height) / dims.width) : 675
      return (
        <figure className="mt-10">
          <SanityImage
            value={value}
            width={width}
            height={height}
            sizes="(min-width: 768px) 720px, 100vw"
            className="w-full rounded-xl"
          />
          {value.caption ? (
            <figcaption className="mt-3 text-center text-sm text-muted">
              {value.caption}
            </figcaption>
          ) : null}
        </figure>
      )
    },
  },
}

export function PortableTextBody({ value }: { value: Body }) {
  return <PortableText value={value} components={components} />
}
