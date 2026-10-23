import { ScrollArea } from '@/components/ui/scroll-area'
import { db } from '@/db/db'
import { notFound } from 'next/navigation'
import Title from './title'
import Content from './content'
async function getDocByUid(uid: string) {
  try {
    const doc = await db.doc.findUnique({
      where: {
        uid: uid,
      },
    })
    return doc
  } catch (error) {
    notFound()
  }
}

export default async function OneWork(props: {
  params: Promise<{ id: string }>
}) {
  const { id } = await props.params
  const doc = await getDocByUid(id)
  return (
    <>
      <ScrollArea className="h-[calc(100vh-46px)]">
        <div className="max-w-[900px] mx-auto my-7 h-[2000px]">
          <Title title={doc?.title ?? ''} uid={id ?? ''} />
          <Content content={doc?.content ?? ''} uid={id ?? ''} />
        </div>
      </ScrollArea>
    </>
  )
}
