'use client'

import Link from "next/link"



const Nav = () => {
  return (
    <header className="bg-slate-400">
      <div className="flex md:flex-row flex-col gap-2 justify-between p-4">
        <Link href="/" className="font-bold text-white text-2xl">MangaYuk</Link>
        <input  placeholder="Cari Manga..." />
      </div>
    </header>
  )
}

export default Nav
