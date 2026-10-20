'use client'
import debounce from 'lodash.debounce'
import { updateDoc } from './action'
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'

const saveContent = debounce(async (uid: string, content: string) => {
  await updateDoc(uid, { content })
}, 1000)

export default function Content(props: { content: string; uid: string }) {
  const [content, setContent] = useState(props.content)
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
    saveContent(props.uid, e.target.value)
  }
  return (
    <div className="mb-8">
      <Textarea
        placeholder="请输入内容..."
        value={content}
        onChange={handleChange}
        className="border-none p-0 text-base focus-visible:ring-transparent"
      />
    </div>
  )
}
