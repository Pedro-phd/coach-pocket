import { z } from 'zod'

export const NewMemberDto = z.object({
  name: z.string({ message: 'Nome é obrigatório' }),
  email: z
    .string({ message: 'Email é obrigatorio' })
    .email({ message: 'Forneça um email valido' }),
  document: z.string(),
  height: z.number().min(1),
  weight: z.number().min(1),
})
