import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-6xl font-bold text-gray-300">404</h1>
      <h2 className="text-2xl font-semibold mt-4">
        ไม่พบหน้าที่คุณต้องการ
      </h2>
      <p className="mt-2 text-gray-600">
        หน้านี้อาจถูกลบหรือย้ายไปที่อื่น
      </p>
      <Link 
        href="/"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        กลับหน้าแรก
      </Link>
    </div>
  )
}