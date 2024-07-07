'use client'

import { useSession } from 'next-auth/react'

export default function Dashboard() {
  const { data } = useSession()

  return (
    <nav>
      <pre>{data?.user?.email}</pre>
    </nav>
  )
}
