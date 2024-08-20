import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='h-screen bg-red-600 grid items-center justify-center'>
        <div className="text-4xl">
          <h1>Dashboard</h1>
          <Link href="/">go back HOME</Link>
        </div>
    </div>
  )
}

export default page