import { ScrollArea } from '@/components/ui/scroll-area'
import AIIsland from '@/components/AIIsland'
import { db } from '@/db/db'
async function getDocByUid(uid: string) {
  const doc = await db.doc.findUnique({
    where: {
      uid: uid,
    },
  })
  return doc
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
          <h1 className="scroll-m-20 font-bold tracking-tight lg:text-5xl">
            {doc?.title}-{doc?.uid}
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6]">
            {doc?.content}
          </p>

          {/* <p className="leading-7 [&:not(:first-child)]:mt-6">
    一些傻相。实际上，他的智力确实也不怎么高，但他坚毅的性格和干活时强大的体力却赢得了所有动物的崇敬。在两匹驾车的辕马之后，进来的是白山羊穆瑞尔和毛驴本杰明。本杰明在农场里年纪最老，脾气也最坏。他不太爱说话，但只要一张嘴，说出来的准是刻薄挖苦的言词。举例说吧，他说上帝给了他尾巴是为了叫他轰苍蝇，但是他宁可不要这个尾巴也别有苍蝇。在农场的动物中间，只有他从来不笑。问他为什么，他说他看不见什么值得笑的事。不过，尽管他从来没有公开承认过，他对拳击手却是心悦诚服的。他们俩
  </p> */}
        </div>
      </ScrollArea>
      {/* <AIIsland /> */}
    </>
  )
}
