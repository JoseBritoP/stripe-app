"use client"
import NavbarPost from '@/app/components/shared/NavbarPost'
import React from 'react'

export default function Postlayout({children}:{children:React.ReactNode}) {
  return (
    <div className=''>
      <NavbarPost/>
      {children}
    </div>
  )
}
