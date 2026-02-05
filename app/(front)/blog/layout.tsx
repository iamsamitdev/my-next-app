export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-100 p-4">
        <h2 className="font-bold">หมวดหมู่บทความ</h2>
        <ul className="mt-2">
          <li>Technology</li>
          <li>Design</li>
          <li>Business</li>
          <li>Lifestyle</li>
          <li>Travel</li>
        </ul>
      </aside>
      <main className="flex-1 p-4">
        {children}
      </main>
    </div>
  )
}
