'use client'

import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { useFormStatus } from 'react-dom'

export default function CreateSubmitButton() {
  const { pending } = useFormStatus()
  return (
    <>
      <Button
        className="w-full justify-start px-2 font-bold hover:bg-card"
        variant="ghost"
        disabled={pending}
      >
        <Plus className="h-4 w-4" />
        &nbsp;&nbsp;创建文档{pending}
      </Button>
    </>
  )
}
