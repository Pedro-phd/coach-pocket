'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { signIn } from 'next-auth/react'

export default function SignIn() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Card className="max-w-[300px]">
        <CardHeader>
          <CardTitle>Login.</CardTitle>
          <CardDescription>
            Faça login para aproveitar a plataforma
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            className="flex gap-4 w-full"
            onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
            variant="outline"
          >
            Login com Google.
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
