'use server'

import { db } from '@/db/db'
import { redirect } from 'next/navigation'
export async function create() {
  const newDoc = await db.doc.create({
    data: {
      title: '新建文档',
      content: '文档内容...',
    },
  })
  redirect(`/work/${newDoc.uid}`)
}

export async function getDocList() {
  const docs = await db.doc.findMany({
    select: {
      id: true,
      title: true,
      uid: true,
    },
    orderBy: {
      id: 'asc',
    },
  })
  return docs
}

export async function deleteDoc(uid: string) {
  await db.doc.delete({
    where: {
      uid: uid,
    },
  })
  const list = await getDocList()
  const otherUid = list.find((item) => item.uid !== uid)?.uid
  redirect(`/work/${otherUid}`)
}
