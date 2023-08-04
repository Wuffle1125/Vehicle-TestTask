import './globals.css'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { ReduxProvider } from '@/redux/provider'
import ApolloProvider from './apolloProvider'
import Header from './header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Instamotion',
  description: 'Explore modern cars from Instamotion',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <ApolloProvider>
          <ReduxProvider>{children}</ReduxProvider>
        </ApolloProvider>
      </body>
    </html>
  )
}
