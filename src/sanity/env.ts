// Publishable Sanity config — safe to import from client and server code.
// Secrets (read tokens, webhook secret) must never be added here.
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-11-06'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET',
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID',
)

function assertValue<T>(value: T | undefined, errorMessage: string): T {
  if (value === undefined || value === '') {
    throw new Error(errorMessage)
  }
  return value
}
