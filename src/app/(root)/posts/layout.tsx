"use client"
import NavbarPost from '@/app/components/shared/NavbarPost'
import React from 'react'

export default function Postlayout({children}:{children:React.ReactNode}) {
  return (
    <main className='h-full w-full border-2 px-10 pb-10'>
      <NavbarPost/>
      {children}
    </main>
  )
}
