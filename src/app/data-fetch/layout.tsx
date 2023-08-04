'use client'

import { createClient, Provider, cacheExchange, fetchExchange } from 'urql'

const client = createClient({
  url: 'https://im-graphql.instamotion.com/',
  exchanges: [cacheExchange, fetchExchange],
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Provider value={client}>{children}</Provider>
}
