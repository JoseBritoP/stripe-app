"use client"

import { useState } from "react";
import { useFormik } from "formik";
import { loginScheme } from "../schemes/LoginScheme";
import z from 'zod'
// import { loginRequest } from "@/src/app/server/authEndpoints";
// import { useNavigate } from "react-router-dom";
import { useRouter } from "next/navigation";

type LoginValues = z.infer<typeof loginScheme>

const useLogin = () => {
  const router = useRouter()
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const [submit,setSubmit] = useState(false);
  const [login,setLogin] =useState('email');
  const handleLoginChange = () => {
    setLogin((prevLogin)=>(prevLogin === 'email' ? 'user' : 'email'))
  }
  
  const formik = useFormik<LoginValues>({
    initialValues: { email: '', password: '' },
    onSubmit: async (values) => {
      const { email, password } = values;
      try {
        console.log('Login exitoso');
        setError(false)
        setSubmit(true)
       
        setTimeout(()=>{
          // response.data.userType === 'client' ? navigate('/proyects') : navigate('/admin')
          // navigate('/proyects')
          router.push('/')
        },1000)
      } catch (error:any) {
        console.error('Error: ', error);
        setError(true);
        setSubmit(true)
        setMessage(error.response?.data?.error || 'Error desconocido');
      }
    },

    validate: (values) => {
      const result = loginScheme.partial().safeParse(values);
      if (result.success) return;
      const errors: Record<string, string> = {};
      result.error.issues.forEach((error:any) => {
        errors[error.path[0]] = error.message;
      });
      return errors;
    },
    validateOnBlur: true,
  });

  if(submit === true){
    setTimeout(()=>{
      setSubmit(false)
    },2000)
  }

  const value = login === "email" ? (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )

  return { formik, message, error,submit,handleLoginChange,login,value };

}

export default useLogin;