"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {

  const pathname = usePathname()

  console.log("Current pathname:", pathname)

  return (
    <header className="flex bg-blue-600 text-white p-4">
        <h1 className="text-xl font-bold"><Link href="/">My App</Link></h1>
        <ul className="flex space-x-4 ml-8 mt-1">
          <li><Link className={pathname === '/' ? 'text-amber-300': ''} href="/">หน้าแรก</Link></li>
          <li><Link className={pathname === '/about' ? 'text-amber-300': ''} href="/about">เกี่ยวกับ</Link></li>
          <li><Link className={pathname === '/contact' ? 'text-amber-300': ''} href="/contact">ติดต่อ</Link></li>
          <li><Link className={pathname === '/blog' ? 'text-amber-300': ''} href="/blog">บทความ</Link></li>
          <li><Link className={pathname === '/counter' ? 'text-amber-300': ''} href="/counter">ตัวนับ</Link></li>
          <li><Link className={pathname === '/login' ? 'text-amber-300': ''} href="/login">เข้าสู่ระบบ</Link></li>
        </ul>
    </header>
  )
}
