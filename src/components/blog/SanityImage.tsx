import Image from 'next/image'
import type { SanityImageSource } from '@sanity/image-url'

import { urlFor } from '@/sanity/lib/image'

type SanityImageValue = {
  asset?: { _id: string; metadata?: { lqip?: string | null } | null } | null
  alt?: string | null
  hotspot?: unknown
  crop?: unknown
} | null

export function SanityImage({
  value,
  width,
  height,
  sizes,
  className,
  priority,
}: {
  value: SanityImageValue | undefined
  width: number
  height: number
  sizes?: string
  className?: string
  priority?: boolean
}) {
  if (!value?.asset?._id) return null
  const lqip = value.asset.metadata?.lqip ?? undefined

  return (
    <Image
      src={urlFor(value as SanityImageSource)
        .width(width)
        .height(height)
        .fit('crop')
        .url()}
      alt={value.alt ?? ''}
      width={width}
      height={height}
      sizes={sizes}
      className={className}
      priority={priority}
      placeholder={lqip ? 'blur' : 'empty'}
      blurDataURL={lqip}
    />
  )
}
