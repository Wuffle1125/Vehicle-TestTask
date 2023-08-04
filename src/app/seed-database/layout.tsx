'use client'

import { createClient, Provider, cacheExchange, fetchExchange } from 'urql'

const headers = {
  apikey:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3eW94b3NvbnVqZGJrb3d3eXdoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAzNzU4NTUsImV4cCI6MjAwNTk1MTg1NX0.kMrDHukAt5GhoJ5zGE_4uOrPBYPbD6sP6COFY1TcdFA',
  authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3eW94b3NvbnVqZGJrb3d3eXdoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAzNzU4NTUsImV4cCI6MjAwNTk1MTg1NX0.kMrDHukAt5GhoJ5zGE_4uOrPBYPbD6sP6COFY1TcdFA`,
}

const client = createClient({
  url: `https://bwyoxosonujdbkowwywh.supabase.co/graphql/v1`,
  fetchOptions: function createFetchOptions() {
    return { headers } as RequestInit
  },
  exchanges: [cacheExchange, fetchExchange],
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Provider value={client}>{children}</Provider>
}
