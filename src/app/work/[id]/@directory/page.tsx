import { create } from './action'
import CreateSubmitButton from './CreateSubmitButton'
import { getDocList } from './action'
import Item from './item'
import { getUserInfo } from '@/lib/session'
export default async function Directory(props: {
  params: Promise<{
    id: string
  }>
}) {
  const params = await props.params
  const docs = await getDocList()
  const user = await getUserInfo()
  return (
    <div className=" h-[800px]">
      {docs.map((i) => (
        <Item
          key={i.id}
          id={i.id}
          title={i.title}
          isCurrent={i.id === params.id}
        />
      ))}
      <form action={create.bind(null, user?.id ?? '')}>
        <CreateSubmitButton />
      </form>
    </div>
  )
}
