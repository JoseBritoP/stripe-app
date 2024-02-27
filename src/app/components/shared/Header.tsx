import Navbar from './Navbar'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='bg-sky-700 border-b-2 border-black dark:border-white dark:bg-slate-900 flex justify-between items-center px-6 py-2 md:py-3'>
      <h1 className='font-bold text-2xl text-white dark:text-white'>
        <Link href="/">Stripe-App</Link>
        </h1>
      <Navbar/>
    </header>
  )
}

export default Header
