import useLogin from '../../hooks/useLoginForm'
import z from 'zod'
import { loginScheme } from '@/app/schemes/LoginScheme'

import AlertComponent from '../shared/Alert'
type Login = z.infer<typeof loginScheme>

const LoginForm = () => {
  const { formik, message, error, submit,
    // handleLoginChange,value 
  } = useLogin();
  return (
    <form action="" className="my-10 bg-white shadow rounded-lg px-5 py-2 pb-4 border-2 dark:bg-slate-950 dark:border-gray-700 dark:border-2 w-full" onSubmit={formik.handleSubmit}>
      {/* email */}
      <div className="my-5">
          <label htmlFor="email" className="uppercase text-gray-600 block text-xl font-bold dark:text-gray-200 hover:cursor-pointer">Email</label>
          <input
            type="text" name="email" id="email" placeholder="Email"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50 border-black dark:border-gray-500 dark:bg-gray-900 dark:placeholder:text-gray-300 dark:text-slate-100"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-500 font-semibold pt-2 dark:text-red-600">{formik.errors.email}</p>
          )}
        </div>
      {/* Password */}
      <div className="my-5">
        <label htmlFor="password" className="uppercase text-gray-600 block text-xl font-bold dark:text-gray-200 hover:cursor-pointer"> Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          className="w-full mt-3 p-3 border rounded-xl bg-gray-50 border-black dark:border-gray-500 dark:bg-gray-900 dark:placeholder:text-gray-300 dark:text-slate-100"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password && (
          <p className="text-red-500 font-semibold pt-2 dark:text-red-600">{formik.errors.password}</p>
        )}
      </div>
      <input
        type="submit"
        value="Log in"
        className="bg-sky-700 w-full py-3 text-white rounded uppercase font-bold hover:bg-sky-600 hover:cursor-pointer dark:bg-sky-800 dark:hover:bg-sky-700 transition-colors 300 ease-in mb-5 disabled:bg-sky-950"
      />
      {submit && <AlertComponent message={message} error={error}/>}
    </form>
  )
}

export default LoginForm
