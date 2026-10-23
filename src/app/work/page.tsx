import { db } from '@/db/db'
import { getUserInfo } from '@/lib/session'
import { redirect } from 'next/navigation'
import { create } from '@/app/work/[id]/@directory/action'
import CreateSubmitButton from '@/app/work/[id]/@directory/CreateSubmitButton'
function getFirstDoc(userId: string) {
  return db.doc.findFirst({
    where: {
      userId: userId,
    },
    orderBy: {
      createdAt: 'asc',
    },
  })
}

export default async function WorkPage() {
  const user = await getUserInfo()
  const doc = await getFirstDoc(user?.id ?? '')
  if (doc) {
    redirect(`/work/${doc.id}`)
  } else {
    return (
      <div>
        <form action={create.bind(null, user?.id ?? '')}>
          <CreateSubmitButton />
        </form>
      </div>
    )
  }
}
