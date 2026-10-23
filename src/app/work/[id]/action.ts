'use server'
import { db } from '@/db/db'
import { revalidatePath } from 'next/cache'
export async function updateDoc(
  id: string,
  data: {
    title?: string
    content?: string
  }
) {
  const doc = await db.doc.update({
    where: {
      id: id,
    },
    data,
  })
  revalidatePath(`/work/${doc.id}`)
}

export async function getDocByid(id: string) {
  const doc = await db.doc.findUnique({
    where: {
      id: id,
    },
  })
  return doc
}
