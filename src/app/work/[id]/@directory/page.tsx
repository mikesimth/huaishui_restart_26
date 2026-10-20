import { FileText, Plus } from 'lucide-react'
import { create } from './action'
import CreateSubmitButton from './CreateSubmitButton'
import { getDocList } from './action'
import { cn } from '@/lib/utils'
import Link from 'next/link'
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
        <Link
          href={`/work/${i.uid}`}
          key={i.id}
          className={cn(
            'inline-flex items-center w-full p-2 py-1 cursor-pointer hover:bg-card hover:text-secondary-foreground',
            i.uid === params.id ? 'bg-card' : 'hover:bg-card'
          )}
        >
          <FileText className="h-4 w-4" />
          &nbsp;{i.id}-{i.title}
        </Link>
      ))}
      <div className="m-2">（会支持层级嵌套）</div>
      <form action={create}>
        <CreateSubmitButton />
      </form>
    </div>
  )
}
