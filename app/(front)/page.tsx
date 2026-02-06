import Image from 'next/image'
async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  return res.json()
}

export default async function App() {

  const users = await getUsers()
  console.log(users)

  return (
    <>
    <div className="p-8">
      {/* <img src="mypic.jpg" width={400} /> */}
      <Image src="/mypic.jpg" width={400} height={400} alt="My Picture" style={{ width: "30%", height: "auto" }} />
      <h1 className="text-3xl">รายชื่อผู้ใช้</h1>
      <ul className="list-disc pl-5">
        {users.map((user: { id: number; name: string; email: string }) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}