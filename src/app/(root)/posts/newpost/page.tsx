import PostForm from '@/app/components/form/PostForm'
import React from 'react'

export default function page() {
  return (
    <section className='w-full h-full p-4'>
      <h1 className='text-2xl text-center mb-6'>Create your post!</h1>
      <PostForm/>
    </section>
  )
}
