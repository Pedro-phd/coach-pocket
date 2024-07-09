'use client'

import { useSession } from 'next-auth/react'

export default function Dashboard() {
  const { data } = useSession()

  return (
    <div>
      <div className='px-5 py-3 border-b'>
        <h2 className='scroll-m-20 text-xl text-foreground font-medium tracking-tight'>
          Bem-vindo de volta, <span className='capitalize'>{data?.user?.name?.split(' ')[0]}!</span>
        </h2>
      </div>
    </div>
  )
}
