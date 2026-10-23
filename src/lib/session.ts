'server only'

import { auth } from '@/auth'

export async function getUserInfo() {
  const session = await auth()
  if (!session || !session.user) {
    return null
  }
  return session.user
}
