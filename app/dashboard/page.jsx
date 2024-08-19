import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='h-screen bg-red-600'>
        <h1>Dashboard</h1>
        <Link href="/">go back HOME</Link>
    </div>
  )
}

export default page