"use client"
import Link from "next/link"
import { navbarLinks,navbarLinksLogin } from "../../constants"
import { usePathname } from "next/navigation"
import { useRouter } from "next/navigation"

const Navbar = () => {
  
  const pathname = usePathname();
  const router = useRouter();
  const sessionString = localStorage.getItem('session');
// Convertir los datos del usuario de cadena JSON a objeto
  const session = sessionString && JSON.parse(sessionString)

  const handleLogout = () => {
    localStorage.clear()
    router.push('/auth')
  }
  return (
    <nav className='flex justify-center items-center'>
      <ul className="flex gap-x-5 text-lg justify-center items-center">
       { session === null ?  navbarLinks.map((link)=>{
            const isActive = (pathname.includes(link.route) && link.route.length > 1) || pathname === link.route;
            return (
              <li key={link.label}>
                <Link href={link.route} className={`hover:bg-slate-800 dark:hover:bg-slate-700 p-3 rounded-lg font-semibold text-gray-300 hover:text-gray-200 transition duration-150 ease-in ${isActive && 'bg-slate-900 dark:bg-slate-500 text-white'}`}>{link.label}</Link>
              </li>
            )
          }) : (
            <>
                { navbarLinksLogin.map((link)=>{
                  const isActive = (pathname.includes(link.route) && link.route.length > 1) || pathname === link.route;
                  return (
                    <li key={link.label}>
                      <Link href={link.route} className={`hover:bg-slate-800 dark:hover:bg-slate-700 p-3 rounded-lg font-semibold text-gray-300 hover:text-gray-200 transition duration-150 ease-in ${isActive && 'bg-slate-900 dark:bg-slate-500 text-white'}`}>{link.label}</Link>
                    </li>
                  )})
              }
              <button onClick={handleLogout} className="hover:bg-sky-800 dark:hover:bg-sky-700 p-3 rounded-lg font-semibold text-gray-300 hover:text-gray-200 transition duration-150 ease-in"> Logout</button>
            </>
          )
        }
      </ul>
    </nav>
  )
}

export default Navbar
