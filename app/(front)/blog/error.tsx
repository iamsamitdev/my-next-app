"use client"

export default function Error({
  error,
}: {
  error: Error & { digest?: string }
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold text-red-600">
        เกิดข้อผิดพลาด!
      </h2>
      <p className="mt-2">{error.message}</p>
    </div>
  )
}