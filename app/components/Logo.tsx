import Link from 'next/link'
import React from 'react'

export default function Logo() {
  return (
    <Link href={"/"}>
    Ecom-<span className="font-extrabold w-32  text-primary">Tec</span>
  </Link>
  )
}
