import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Toaster } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import QueryProvider from '@/lib/query-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <QueryProvider>
        <TooltipProvider>
          <body className={inter.className}>{children}</body>
          <Toaster />
        </TooltipProvider>
      </QueryProvider>
    </html>
  )
}
