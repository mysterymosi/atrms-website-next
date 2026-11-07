import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // Fast, cached reads of published content. Tag revalidation keeps it fresh.
  useCdn: true,
  perspective: 'published',
})
