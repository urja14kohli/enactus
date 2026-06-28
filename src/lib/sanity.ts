import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: '9sjbst1y',
  dataset: 'team',
  apiVersion: '2025-01-01',
  useCdn: true,
})