'use client'

import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react'

export default function SignIn() {
  return (
    <div>
      <Button onClick={() => signIn('google')}>Sign In</Button>)
    </div>
  )
}
