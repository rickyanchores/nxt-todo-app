import Link from 'next/link';
import React from 'react'

const Home = () => {
  return (
    <div className='Home h-screen bg-teal-600 grid justify-center items-center'>
        <div className="">
          <h1>Home</h1>
          <Link href="./dashboard">Dashboard</Link>
        </div>

    </div>
  )
}

export default Home;