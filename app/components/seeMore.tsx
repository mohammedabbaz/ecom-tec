import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import React from 'react'

export default function SeeMore({details}:{details:string}) {
  return (
    <Dialog >
    <DialogTrigger asChild>
      <span  className='text-primary font-bold cursor-pointer '>See more</span>
    </DialogTrigger>
    <DialogContent className="sm:max-w-3xl">
      <DialogHeader>
        <DialogTitle>Product Presentation</DialogTitle>
        <DialogDescription className='mt-6'>
          {details}
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
  )
}
