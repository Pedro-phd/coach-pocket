'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { signOut } from 'next-auth/react'

export default function SignIn() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Card className="max-w-[300px]">
        <CardHeader>
          <CardTitle>Sair.</CardTitle>
          <CardDescription>Desconectar da aplicação.</CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            className="flex gap-4 w-full"
            onClick={() => signOut({ callbackUrl: '/' })}
          >
            Sair
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
