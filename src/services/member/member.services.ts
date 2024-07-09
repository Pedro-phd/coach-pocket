import { BadRequest } from '@/domain/errors/badrequest.errors'
import { addMemberSchema } from '@/domain/member/dto'
import { db } from '@/lib/prisma'

export const getAllMembers = async (coachId: string) => {
  return await db.member.findMany({
    where: {
      coachId,
    },
  })
}

export const addMember = async (data: unknown, coachId: string) => {
  const validate = addMemberSchema.safeParse(data)

  if (!validate.success) {
    throw new BadRequest({
      message: 'Dados inválidos',
      errors: validate.error.flatten().fieldErrors,
    })
  }

  return await db.member.create({
    data: {
      ...validate.data,
      coachId,
    },
  })
}
