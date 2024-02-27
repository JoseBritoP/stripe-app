"use client"

import RegisterForm from "@/app/components/form/RegisterForm"

export default function Page() {

  return (
    <section className='w-full'>
      <h1>Sesión</h1>
      <div className='flex flex-col w-full justify-center items-center p-6'>
        <h2>Registro</h2>
        <RegisterForm/>
      </div>
    </section>
  )
}