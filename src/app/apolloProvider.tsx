'use client'

import { SUPABASE_URL } from '@/config/env'
import { headers } from '@/lib/headers'
import { createClient, Provider, cacheExchange, fetchExchange } from 'urql'

const client = createClient({
  url: `${SUPABASE_URL}/graphql/v1`,
  fetchOptions: function createFetchOptions() {
    return { headers } as RequestInit
  },
  exchanges: [cacheExchange, fetchExchange],
})

export default function ApolloProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return <Provider value={client}>{children}</Provider>
}
