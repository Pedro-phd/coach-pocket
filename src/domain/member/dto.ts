import { z } from 'zod'

export const addMemberSchema = z.object({
  name: z.string({ message: 'Nome é obrigatório.' }),
  email: z
    .string({ message: 'E-mail é obrigatório.' })
    .email({ message: 'Forneça um e-mail válido.' }),
  height: z.coerce
    .number({
      required_error: 'Altura é obrigatório',
      invalid_type_error: 'Use somente números e ponto (.)',
    })
    .min(1),
  weight: z.coerce
    .number({
      required_error: 'Peso é obrigatório',
      invalid_type_error: 'Use somente números e ponto (.)',
    })
    .min(1),
  document: z
    .string({
      required_error: 'CPF/CNPJ é obrigatório.',
    })
    .refine((doc) => {
      const replacedDoc = doc.replace(/\D/g, '')
      return replacedDoc.length >= 11
    }, 'CPF/CNPJ deve conter no mínimo 11 caracteres.')
    .refine((doc) => {
      const replacedDoc = doc.replace(/\D/g, '')
      return replacedDoc.length <= 14
    }, 'CPF/CNPJ deve conter no máximo 14 caracteres.')
    .refine((doc) => {
      const replacedDoc = doc.replace(/\D/g, '')
      return !!Number(replacedDoc)
    }, 'CPF/CNPJ deve conter apenas números.'),
})

export type AddMemberDTO = z.infer<typeof addMemberSchema>
