'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { CancelCircleIcon, CheckmarkSquare03Icon } from 'hugeicons-react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { AddMemberDTO, addMemberSchema } from '@/domain/member/dto'
import useMutationClient from '@/hooks/useMutationClient'

export default function AddMemberForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddMemberDTO>({
    resolver: zodResolver(addMemberSchema),
  })

  const addUser = useMutationClient({
    path: '/members',
    method: 'POST',
    invalidateKey: 'members',
  })
  const submit = async (data: any) => {
    await addUser.mutateAsync(data, {
      onSuccess: () => {
        toast('Membro adicionado com sucesso.', {
          position: 'top-right',
          icon: <CheckmarkSquare03Icon className="text-emerald-500" />,
        })
        return
      },
      onError: () => {
        toast('Erro ao adicionar membro.', {
          position: 'top-right',
          icon: <CancelCircleIcon className="text-destructive" />,
        })
        return
      },
    })
  }

  return (
    <form className="p-3 flex gap-2 flex-col" onSubmit={handleSubmit(submit)}>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="name" className="text-card-foreground">
          Nome
        </Label>
        <Input
          id="name"
          placeholder="Nome"
          errorMsg={errors.name?.message}
          {...register('name')}
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email" className="text-card-foreground">
          Email
        </Label>
        <Input
          type="email"
          id="email"
          placeholder="email@email.com"
          errorMsg={errors.email?.message}
          {...register('email')}
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="document" className="text-card-foreground">
          Documento CPF/CNPJ
        </Label>
        <Input
          type="number"
          id="document"
          placeholder="123.123.123-32"
          errorMsg={errors.document?.message}
          {...register('document')}
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="height" className="text-card-foreground">
          Altura
        </Label>
        <Input
          suffix="cm"
          id="height"
          placeholder="172"
          errorMsg={errors.height?.message}
          hint="Use somente números e ponto (.) "
          {...register('height')}
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="weight" className="text-card-foreground">
          Peso
        </Label>
        <Input
          suffix="kg"
          id="weight"
          placeholder="900"
          errorMsg={errors.weight?.message}
          hint="Use somente números e ponto (.) "
          {...register('weight')}
        />
      </div>
      <Button type="submit" variant="outline">
        Adicionar novo aluno
      </Button>
    </form>
  )
}
