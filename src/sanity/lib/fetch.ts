import type { QueryParams } from 'next-sanity'

import { client } from './client'

/**
 * Fetches published content and tags it for on-demand revalidation.
 * A Sanity webhook calls /api/revalidate with matching tags when content
 * changes; `revalidate` is only a safety net if a webhook is missed.
 */
export async function sanityFetch<const QueryString extends string>({
  query,
  params = {},
  tags,
  revalidate = 3600,
}: {
  query: QueryString
  params?: QueryParams
  tags: string[]
  revalidate?: number | false
}) {
  // Locally there's no webhook to purge the cache, so always fetch fresh
  // content in development.
  if (process.env.NODE_ENV === 'development') {
    return client.fetch(query, params, { cache: 'no-store' })
  }

  return client.fetch(query, params, { next: { revalidate, tags } })
}
