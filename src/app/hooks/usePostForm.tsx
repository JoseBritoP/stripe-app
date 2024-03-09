"use client"
import { useState} from 'react'
import { useRouter } from 'next/navigation'
import { useFormik } from 'formik';
import { postScheme, postSchemeV2 } from '../schemes/PostScheme';
import z from 'zod';


type PostValues = z.infer<typeof postSchemeV2>
export default function usePostForm() {
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const [submit,setSubmit] = useState(false);

  const router = useRouter();

  const formik = useFormik<PostValues>({
    initialValues: { title:'',content:'',userId:-1,categories:[] },
    onSubmit: async (values) => {
      console.log(values)
    },

    validate: (values) => {
      const result = postScheme.safeParse(values);
      if (result.success) return;
      const errors: Record<string, string> = {};
      result.error.issues.forEach((error:any) => {
        errors[error.path[0]] = error.message;
      });
      return errors;
    },
    validateOnBlur: true,
  });

  return { message, error, submit, formik }
}
