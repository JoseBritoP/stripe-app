"use client"
import React from 'react'
import { AlertComponent } from '../shared'
import usePostForm from '@/app/hooks/usePostForm'
import { postScheme } from '@/app/schemes/PostScheme'

export default function PostForm() {

  const { message, error, submit, formik } = usePostForm();

  const categories = [
    {
      "id": 1,
      "name": "Fantasía"
    },
    {
      "id": 2,
      "name": "Horror"
    }
  ]

  return (
    <form onSubmit={formik.handleSubmit} className='w-full h-full'>
      <legend className='flex flex-col'>
        {/* Title */}
        <div className="my-5">
          <label htmlFor="title" className="uppercase text-gray-600 block text-xl font-bold dark:text-gray-200 hover:cursor-pointer" >Title</label>
            <input
              type="title"
              name="title"
              id="title"
              placeholder="title of post"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50 border-black dark:border-gray-500 dark:bg-gray-900 dark:placeholder:text-gray-300 dark:text-slate-100"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.title}
              />
            {formik.touched.title && formik.errors.title && (
              <p className="text-red-500 font-semibold pt-2 dark:text-red-600">{formik.errors.title}</p>
            )}
        </div>
        {/* Content */}
        <div className="my-5">
          <label htmlFor="content" className="uppercase text-gray-600 block text-xl font-bold dark:text-gray-200 hover:cursor-pointer" >Content</label>
            <textarea
              name="content"
              id="content"
              placeholder="Content..."
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50 border-black dark:border-gray-500 dark:bg-gray-900 dark:placeholder:text-gray-300 dark:text-slate-100"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.content}
              />
            {formik.touched.content && formik.errors.content && (
              <p className="text-red-500 font-semibold pt-2 dark:text-red-600">{formik.errors.content}</p>
              )}
        </div>
        <div className='my-6'>
          <label htmlFor="categories">Categories</label>
          {/* {categories && categories.map(({id,name})=>(
            <input key={id} type='checkbox' value={formik.values.categories} onChange={formik.handleChange}
            onBlur={formik.handleBlur}>{name}
            </input>
          ))} */}
        </div>
        <div className='flex justify-center'>
          <input
            type="submit"
            value="Create"
            className="bg-sky-700 px-6 py-3 text-white rounded uppercase font-bold hover:bg-sky-600 hover:cursor-pointer dark:bg-sky-800 dark:hover:bg-sky-700 transition-colors 300 ease-in mb-5 disabled:bg-sky-950"
            />      {submit && <AlertComponent message={message} error={error}/>}
        </div>
      </legend>
    </form>
  )
}
