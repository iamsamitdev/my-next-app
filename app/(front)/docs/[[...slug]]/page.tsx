type Props = {
  params: Promise<{ slug: string[] }>
}

export default async function DocPage({ params }: Props) {
  const { slug } = await params
  return (
    <div>
      <h1>This is a document page</h1>
      { slug ? <p>Path: {slug.join(' > ') }</p> : <p>Not found document</p> }
    </div>
  )
}
