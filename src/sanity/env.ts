// Publishable Sanity config — safe to import from client and server code.
// These values are public (they match studio/sanity.config.ts), so they have
// defaults; env vars can override them, e.g. to point at another dataset.
// Secrets (read tokens, webhook secret) must never be added here.
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-11-06'

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'majffrea'

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
