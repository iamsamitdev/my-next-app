import Link from "next/link"

export default function Navbar() {
  return (
    <header className="flex bg-blue-600 text-white p-4">
        <h1 className="text-xl font-bold"><Link href="/">My App</Link></h1>
        <ul className="flex space-x-4 ml-8 mt-1">
          <li><Link href="/">หน้าแรก</Link></li>
          <li><Link href="/about">เกี่ยวกับ</Link></li>
          <li><Link href="/contact">ติดต่อ</Link></li>
          <li><Link href="/blog">บทความ</Link></li>
          <li><Link href="/counter">ตัวนับ</Link></li>
          <li><Link href="/login">เข้าสู่ระบบ</Link></li>
        </ul>
    </header>
  )
}
