"use client"
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useFormik } from 'formik';
import { useAppDispatch,useAppSelector } from '@/app/redux/hooks'
import { useRegisterUserMutation } from "../redux/services/userApi";
import { registerScheme } from '@/app/schemes/RegisterScheme';
import { registerUser } from '../server/users';
import z from 'zod';

type RegisterValues = z.infer<typeof registerScheme>;

const useRegister = () => {

  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const [submit,setSubmit] = useState(false);

  const router = useRouter();

  const formik = useFormik<RegisterValues>({
    initialValues: { username:'',email: '', password: '', repeatPassword: '' },
    onSubmit: async ({username,email,password}) => {
      try {
        const res = await registerUser({username,email,password})
        console.log(res)
        setMessage(res?.data.message)
        setError(false)
        setSubmit(true)
      } catch (error:any) {
        setMessage(error.message)
        setError(false)
        setSubmit(true)
      }
    },

    validate: (values) => {
      const result = registerScheme.safeParse(values);
      if (result.success) return;
      const errors: Record<string, string> = {};
      result.error.issues.forEach((error:any) => {
        errors[error.path[0]] = error.message;
      });
      if (values.repeatPassword !== values.password) {
        errors['repeatPassword'] = 'The password must match';
      }
      return errors;
    },
    validateOnBlur: true,
  });

  if(submit === true){
    setTimeout(()=>{
      setSubmit(false)
      router.push('/')
    },2000)
  }

  return { formik, message, error,submit };
};

export default useRegister;
