'use client'

import { Member } from '@prisma/client'
import { LinkSquare01Icon } from 'hugeicons-react'
import { useRouter } from 'next/navigation'

import LoadingTableRow from './loading-table-row'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'

interface Props {
  data?: Member[]
  loading?: boolean
}

export default function MembersTable({ data, loading = false }: Props) {
  const { push } = useRouter()
  const redirect = (id: string) => push(`/dashboard/member/${id}`)

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nome</TableHead>
          <TableHead>Email</TableHead>
          <TableHead className="hidden md:flex">Documento</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((m) => {
          return (
            <TableRow key={m.id}>
              <TableCell className="capitalize">{m.name}</TableCell>
              <TableCell>{m.email}</TableCell>
              <TableCell className="hidden md:flex">{m.document}</TableCell>
              <TableCell>
                <Tooltip>
                  <TooltipTrigger onClick={() => redirect(m.id)}>
                    <LinkSquare01Icon className="size-5 text-indigo-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Acessar ficha</p>
                  </TooltipContent>
                </Tooltip>
              </TableCell>
            </TableRow>
          )
        })}
        {loading && <LoadingTableRow numberOfCol={4} />}
      </TableBody>
    </Table>
  )
}
