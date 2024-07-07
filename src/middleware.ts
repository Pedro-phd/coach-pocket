import { auth } from './lib/auth'

// export { auth as middleware } from '@/lib/auth'

// export default auth((req) => {
//   console.log('caiu')

//   if (!req.auth && req.nextUrl.pathname.startsWith('/api/member/')) {
//     return Response.json({}, { status: 401 })
//   }
// })

export async function middleware() {
  const session = await auth()
  // if (!session) {
  //   return Response.json({}, { status: 401 })
  // }
  console.log(session)
  console.log('aqui 2')
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
    '/api/member/all',
  ],
}
