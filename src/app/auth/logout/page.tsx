import { auth, signOut } from '@/lib/auth'

export default async function SignOut() {
  const session = await auth()
  return (
    <form
      action={async () => {
        'use server'
        await signOut()
      }}
    >
      <button type="submit">Sign Out</button>
      {session?.user?.email ?? 'não logado'}
    </form>
  )
}
