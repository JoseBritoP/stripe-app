import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { Header } from '../components/shared'
import ReduxProvider from '../redux/provider'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Stripe app',
  description: 'A simple app with stripe',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-950`}>
        <ReduxProvider>
          <Header/>
          <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {children}
          </main>
          </ReduxProvider>
        </body>
    </html>
  )
}
