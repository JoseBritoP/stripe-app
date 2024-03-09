import React from 'react'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navbarPost } from '@/app/constants';
export default function NavbarPost() {

  const pathname = usePathname();

  return (
    <header className="dark:bg-gradient-to-b from-slate-950 px-4 py-6 border-b-2 dark:border-slate-700">
      <nav className="flex h-full w-full justify-center p-4 gap-x-4">
        <ul className="flex gap-x-5 text-lg">
          {navbarPost.map((link)=>{
            const isActive = (pathname.includes(link.route) && link.route.length > 0) || pathname === link.route;
            return (
              <li key={link.label}>
                <Link href={link.route} className={`hover:bg-slate-800 dark:hover:bg-slate-700 p-3 rounded-lg font-semibold text-gray-300 dark:text-gray-50 hover:text-gray-200 transition duration-150 ease-in ${isActive && 'bg-slate-900 dark:bg-slate-500 text-white'}`}>{link.label}</Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
