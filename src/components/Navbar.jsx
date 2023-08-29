import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
const Navbar = () => {
  return (
    <div>
        <nav className='md:w-[1100px] w-full px-2 z-20 flex justify-between items-center mx-auto '>
            <Link to={'/'}>
                <img src={logo} alt="logo" className='w-16' />
            </Link>
            <form >
                <input type="text" placeholder='Search recipe' className=' outline-none shadow-lg  px-4 py-2 text-yellow-600 font-medium bg-gray-300 rounded-md' />
            </form>
        </nav>
    </div>
  )
}

export default Navbar