import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Event App',
  description: 'Created by Asif Munshi',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={fontSans.variable}>
        <Providers>
          <main className="flex min-h-screen flex-col justify-between font-sans">
            <Header />
            {children}
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  )
}
