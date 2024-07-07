'use client'

import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar'
import { useRouter } from 'next/navigation'

export default function DashMenu() {
  const { push } = useRouter()

  return (
    <div className="flex w-full max-w-5xl justify-between mx-auto mt-4 px-4">
      <span className="hidden md:flex text-lg tracking-tight text-gray-900">
        Coach<span className="text-primary">Pocket</span>
      </span>
      <span className="flex md:hidden text-lg tracking-tight font-bold text-gray-900">
        C<span className="text-primary">P</span>
      </span>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Dashboard</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger onClick={() => push('/dashboard/members')}>
            Alunos
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Perfil</MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    </div>
  )
}
