import { auth } from '@/lib/auth'
import { SessionProvider } from 'next-auth/react'
import { redirect } from 'next/navigation'

export default async function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await auth()

  if (!session) {
    redirect('/auth/login')
  }
  return <SessionProvider session={session}>{children}</SessionProvider>
}
