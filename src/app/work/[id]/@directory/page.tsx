import { FileText, Plus } from 'lucide-react'
import { create } from './action'
import CreateSubmitButton from './CreateSubmitButton'
import { getDocList } from './action'
import Item from './item'
export default async function Directory(props: {
  params: Promise<{
    id: string
  }>
}) {
  const params = await props.params
  const docs = await getDocList()
  return (
    <div className=" h-[800px]">
      {docs.map((i) => (
        <Item
          key={i.id}
          uid={i.uid}
          title={i.title}
          isCurrent={i.uid === params.id}
        />
      ))}
      <form action={create}>
        <CreateSubmitButton />
      </form>
    </div>
  )
}
