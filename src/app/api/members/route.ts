import { NextResponse } from 'next/server'

import { BadRequest } from '@/domain/errors/badrequest.errors'
import { auth } from '@/lib/auth'
import { addMember, getAllMembers } from '@/services/member/member.services'

export const GET = auth(async function GET(req) {
  if (!req.auth) return Response.json({}, { status: 401 })
  const coachId = req.auth.user?.id
  const data = await getAllMembers(coachId ?? '')
  return NextResponse.json({ data }, { status: 200 })
})

export const POST = auth(async function POST(req) {
  // eslint-disable-next-line no-constant-binary-expression
  if (!req.auth || !req.auth.user?.id === undefined)
    return Response.json({}, { status: 401 })
  const coachId = req.auth.user?.id
  const body = await req.json()
  console.log(body)
  try {
    await addMember(body, coachId!)
    return NextResponse.json({}, { status: 201 })
  } catch (error) {
    if (error instanceof BadRequest) {
      return NextResponse.json(
        { msg: error.message, errors: error.errors },
        {
          status: error.code,
        },
      )
    }
    return NextResponse.json({ msg: error }, { status: 400 })
  }
})
