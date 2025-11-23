import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='w-full flex justify-between py-4 items-center shadow-md bg-sky-800 text-white font-bold text-2xl px-16'>
        <Link href="/">Home</Link>
        <Link href="Fouts?page=2">Frouts</Link>
        <Link href="Login">Login</Link>
        <Link href="SignUp">SignUp</Link>
    </div>
  )
}

export default Navbar