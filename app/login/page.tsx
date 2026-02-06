"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function LoginPage() {

  const router = useRouter()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  // ฟังก์ชันจัดการการล็อกอิน
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (username === 'admin' && password === '1234') {
      alert('Login successful!')
      // สั่งไปหน้า counter
      router.push('/counter')  // ไปที่หน้า counter เมื่อล็อกอินสำเร็จ
    } else {
      alert('Login failed. Please try again.')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Login Page</h2>
      <form onSubmit={handleLogin} className="flex flex-col space-y-4 w-64">
        <input
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Username"
          className="p-2 border border-gray-300 rounded"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          className="p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>

      <p className="mt-2">Back to home <Link href="/">Home</Link></p>

    </div>
  )
}
