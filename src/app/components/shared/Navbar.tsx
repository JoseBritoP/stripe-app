"use client"
import Link from "next/link"
import { navbarLinks } from "../../constants"
import { usePathname } from "next/navigation"

const Navbar = () => {
  
  const pathname = usePathname();

  return (
    <nav className='flex justify-center items-center'>
      <ul className="flex gap-x-5 text-lg">
       { navbarLinks.map((link)=>{
          const isActive = (pathname.includes(link.route) && link.route.length > 1) || pathname === link.route;
          return (
            <li key={link.label}>
              <Link href={link.route} className={`hover:bg-slate-800 dark:hover:bg-slate-700 p-3 rounded-lg font-semibold text-gray-300 hover:text-gray-200 transition duration-150 ease-in ${isActive && 'bg-slate-900 dark:bg-slate-500 text-white'}`}>{link.label}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar
