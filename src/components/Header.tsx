'use client'

import Link from "next/link"




const Header = ({title, linkhref, linktitle}: {title:string, linkhref:string, linktitle:string}) => {
  return (
    <div className="flex justify-between items-center p-4 ">
        <h1 className="text-2xl font-bold">{title}</h1>
        <Link href={linkhref} className="text-sm md:text-xl underline hover:text-indigo-500 transition-all">{linktitle}</Link>
      </div>
  )
}

export default Header
