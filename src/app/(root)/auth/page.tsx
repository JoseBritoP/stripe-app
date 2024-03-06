"use client"
import { useState } from "react"
import RegisterForm from "@/app/components/form/RegisterForm"
import LoginForm from "@/app/components/form/LoginForm";
export default function Page() {
  const [formState,setFormState] = useState('login');

  const handleLoginChange = () => {
    setFormState((prevFormState)=>prevFormState === 'login' ? 'register' : 'login')
  };

  return (
    <section className='w-full h-full flex flex-col justify-center items-center'>
      <h1 className="text-center text-xl md:text-4xl font-semibold">Sesión</h1>
       {formState === "login" ? (
      <div className='flex flex-col w-full md:w-2/3 justify-center items-center p-2'>
        <h1 className='text-white font-semibold text-xl text-center mb-2'>Login</h1>
        <button onClick={handleLoginChange} className='text-white bg-sky-800 hover:bg-sky-700 transition duration-200 ease-in text-center p-2 rounded-full px-4'>Register</button>
        <LoginForm/>
      </div>
      ) : (
        <div className='flex flex-col w-full justify-center items-center p-2'>
        <h1 className='text-white font-semibold text-xl text-center mb-4'>Register</h1>
        <button onClick={handleLoginChange} className='text-white bg-sky-800 hover:bg-sky-700 transition duration-200 ease-in text-center p-2 rounded-full px-4'>Login</button>
          <RegisterForm/>
        </div>
      )}
    </section>
  )
}