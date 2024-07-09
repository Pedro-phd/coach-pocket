'use client'

import { Member } from '@prisma/client'
import { UserAdd01Icon, UserGroupIcon } from 'hugeicons-react'
import { useRouter } from 'next/navigation'

import MembersTable from '@/components/members-table'
import { Button } from '@/components/ui/button'
import useQueryClient from '@/hooks/useQueryClient'

export default function MemberPage() {
  const { push } = useRouter()

  const { data: response, isLoading } = useQueryClient<Member[]>({
    key: 'members',
    path: '/members',
  })
  return (
    <div className="flex flex-col gap-4 h-full w-full border rounded-lg bg-white">
      <div className="px-5 py-3 border-b">
        <h2 className="scroll-m-20 text-xl text-foreground font-medium tracking-tight">
          Alunos
        </h2>
      </div>
      <div className="grid md:grid-cols-[3fr_1fr] gap-4 p-3 md:p-5">
        <div className="w-full h-ful border rounded-lg p-3 md:p-6">
          <p className="font-semibold flex gap-2 items-center text-2xl text-foreground">
            <UserGroupIcon />
            Alunos
          </p>
          <MembersTable data={response?.data} loading={isLoading} />
        </div>
        <div
          className=" row-start-1 md:col-start-2 p-3 md:p-6 bg-gradient-to-tr from-indigo-700 
          to-indigo-600 rounded-lg gap-2 flex flex-col"
        >
          <p className="text-white font-semibold text-lg md:text-2xl">
            Novo Aluno
          </p>
          <p className="text-white font-medium text-xs md:text-sm">
            Adicione um novo aluno no seu time!
          </p>
          <Button
            className="flex gap-2 md:mt-4 bg-indigo-800 text-white hover:bg-indigo-900 hover:text-white"
            size="sm"
            variant="ghost"
            onClick={() => push('/dashboard/member/new')}
          >
            <UserAdd01Icon className="size-5 hidden md:flex" />
            Adicionar Aluno
          </Button>
        </div>
      </div>
    </div>
  )
}
