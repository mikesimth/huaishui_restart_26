'use server'

import { db } from '@/db/db'
import { redirect } from 'next/navigation'
export async function create(userId: string) {
  const newDoc = await db.doc.create({
    data: {
      title: '新建文档',
      content: '文档内容...',
      userId: userId,
    },
  })
  redirect(`/work/${newDoc.id}`)
}

export async function getDocList() {
  const docs = await db.doc.findMany({
    select: {
      id: true,
      title: true,
    },
    orderBy: {
      id: 'asc',
    },
  })
  return docs
}

export async function deleteDoc(id: string) {
  await db.doc.delete({
    where: {
      id: id,
    },
  })
  const list = await getDocList()
  const otherid = list.find((item) => item.id !== id)?.id
  redirect(`/work/${otherid}`)
}
