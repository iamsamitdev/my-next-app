import Link from "next/link"
export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Login Page</h2>
      <form className="flex flex-col space-y-4 w-64">
        <input
          type="text"
          placeholder="Username"
          className="p-2 border border-gray-300 rounded"
        />
        <input
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
