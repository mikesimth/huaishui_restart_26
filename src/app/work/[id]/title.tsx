'use client'
import { Input } from '@/components/ui/input'
import debounce from 'lodash.debounce'
import { updateDoc } from './action'
import { useState } from 'react'
const saveTitle = debounce(async (uid: string, title: string) => {
  await updateDoc(uid, { title })
}, 1000)
export default function Title(props: { title: string; uid: string }) {
  const [title, setTitle] = useState(props.title)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
    saveTitle(props.uid, e.target.value)
  }
  return (
    <div className="mb-8">
      <Input
        placeholder="请输入内容..."
        value={title}
        onChange={handleChange}
        className="border-none p-0 text-4xl font-bold focus-visible:ring-transparent"
      />
      {/* 可能还会再增加其他功能，例如设置 Icon 、背景等 */}
    </div>
  )
}
