import Link from 'next/link'

export default function Header() {
  return (
    <header className="container mx-auto h-20 py-6 px-14 flex gap-x-8">
      <Link href="/">Home</Link>
      <Link href="/data-fetch">Fetch Dummy Data</Link>
      <Link href="/seed-database">Seed</Link>
    </header>
  )
}
