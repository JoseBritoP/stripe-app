"use client";

import React from 'react'
import { useRouter } from "next/navigation"

interface Props {
  id?:number | string
  title:string
  content:string
  author:string
  categories?:{
    id:number
    name:string
  }[]
}

export default function Card({id,title,content,author,categories}:Props) {

  const router = useRouter();

  return (
    <div className="flex flex-col gap-4 border-2 border-slate-900 p-6 py-5 rounded-lg hover:bg-neutral-300  hover:cursor-pointer transition ease-in dark:border-white dark:text-white dark:hover:bg-slate-900"
      onClick={()=> router.push(`/posts/detail/${id}`)}
    >
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-xs dark:text-gray-500 uppercase">{content}</p>
      <p className='font-light' onClick={()=>router.push('/user/detail/1')}>Author: <span className='font-semibold text-slate-100 hover:underline hover:cursor-pointer'>{author}</span></p>
      {categories ? categories.map((category)=>(
        <div key={category.id}>
          <p className='text-emerald-600 font-medium'>{category.name}</p>
        </div>
      )):<p>No categories</p>}

    </div>
  )
}
