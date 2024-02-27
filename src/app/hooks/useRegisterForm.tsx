"use client"
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useFormik } from 'formik';
import { registerScheme } from '@/app/schemes/RegisterScheme';
import z from 'zod';

type RegisterValues = z.infer<typeof registerScheme>;

const useRegister = () => {

  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const [submit,setSubmit] = useState(false);

  const router = useRouter()

  const formik = useFormik<RegisterValues>({
    initialValues: { username:'',email: '', password: '', repeatPassword: '' },
    onSubmit: async (values) => {
      console.log(values)
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
    },2000)
  }

  return { formik, message, error,submit };
};

export default useRegister;
