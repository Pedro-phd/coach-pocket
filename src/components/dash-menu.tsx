'use client'

import { Button } from './ui/button'
import { useSession } from 'next-auth/react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'
import { usePathname, useRouter } from 'next/navigation'
import TridentIcon from './trident-icon'
import { Separator } from './ui/separator'
import {  ChartAverageIcon, UserStar01Icon } from 'hugeicons-react'
import { motion } from 'framer-motion'

export default function DashMenu() {
  const { data } = useSession()
  const { push } = useRouter()
  const pathName = usePathname()

  const isActual = (actual: string) => {
    return false
  } 

  return (
    <div
      className="
      w-full max-w-12 md:max-w-[200px] h-full flex flex-col 
      items-center px-2 md:px-3 py-4 gap-8"
    >
      <div className="flex gap-1 items-center">
        <div 
          className="shadow bg-gradient-to-tr to-indigo-300
          from-indigo-700 rounded size-8 flex items-center justify-center text-white"
        >
          <TridentIcon className="text-white border-white stroke-white size-6 shadow" />
        </div>
        <p className="hidden md:flex font-medium text-md text-foreground">CoachPocket</p>
      </div>
      <div className="flex gap-2 flex-col h-full">
        <Button
          variant={isActual('/dashboard') ? "secondary" : "ghost"}
          onClick={() => push('/dashboard')}
          className='text-left justify-center md:justify-start gap-3 text-muted-foreground w-8 md:w-full'
          size='sm'
        >
          <ChartAverageIcon />
          <span className='hidden md:flex'>Dashboard</span>
        </Button>
        <Button
          variant={isActual('/dashboard/member') ? "secondary" : "ghost"}
          onClick={() => push('/dashboard/member')}
          className='text-left justify-center md:justify-start gap-3 text-muted-foreground w-8 md:w-full'
          size='sm'
        >
          <UserStar01Icon className='size-5'/>
          <span className='hidden md:flex'>Alunos</span>
        </Button>
      <div className='mt-auto flex justify-center flex-col gap-2'>
        <Separator />
        <Tooltip>
          <TooltipTrigger className='
          flex gap-2 items-center bg-accent  justify-center
          md:px-3 py-1 rounded border text-accent-foreground shadow'>
            <Avatar className="rounded size-8">
              <AvatarImage src={data?.user?.image ?? ''} />
              <AvatarFallback>{data?.user?.name?.split('')[0]}</AvatarFallback>
            </Avatar>
            <p className='hidden md:flex text-primary text-sm first-letter:uppercase'>{data?.user?.name}</p>
          </TooltipTrigger>
          <TooltipContent>
            <p>Acessar perfil</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
    </div>
  )
}
