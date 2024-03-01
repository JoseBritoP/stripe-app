import React from 'react'
import { AlertComponent } from '../shared'
import usePostForm from '@/app/hooks/usePostForm'
import { postScheme } from '@/app/schemes/PostScheme'

export default function PostForm() {

  const { message, error, submit, formik } = usePostForm();
  return (
    <form onSubmit={formik.handleSubmit}>
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
    </form>
  )
}
