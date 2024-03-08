"use client"
import React from 'react'
import Link from 'next/link'
export default function SuccessPage() {
  return (
    <div className='flex flex-col w-full h-full items-center gap-y-10'>
      <h1 className='text-4xl text-center text-emerald-500 font-semibold'>Success</h1>
      <Link href={'/'} className='bg-sky-700 w-1/6 p-4 text-center rounded-md text-xl hover:bg-sky-900 ease-in-out hover:cursor-pointer'>Back to home</Link>
    </div>
  )
}
