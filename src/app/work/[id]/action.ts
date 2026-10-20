'use server'
import { db } from '@/db/db'
import { revalidatePath } from 'next/cache'
export async function updateDoc(
  uid: string,
  data: {
    title?: string
    content?: string
  }
) {
  const doc = await db.doc.update({
    where: {
      uid: uid,
    },
    data,
  })
  revalidatePath(`/work/${doc.uid}`)
}

export async function getDocByUid(uid: string) {
  const doc = await db.doc.findUnique({
    where: {
      uid: uid,
    },
  })
  return doc
}
