import InputField from '@/app/Components/InputField/InputField';
import Todos from '@/app/Components/Todos/Todos';
import Link from 'next/link';
import React from 'react'

const Home = () => {
  return (
    <div className='Home h-screen grid justify-center items-center'>
        <div className="">
          <h1>Home</h1>
          <Link href="./dashboard">Dashboard</Link>
        </div>
        <div className="TodoApp">
          <InputField />
          <Todos />
        </div>
    </div>
  )
}

export default Home;