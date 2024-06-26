import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="header">
      
        <NavLink to="/" className="w-10 h-10 rounded-lg bg-black  items-center justify-center flex font-bold shadow-md">
            <p className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">RP</p>
        </NavLink>
        <nav className="flex text-lg gap-7 font-medium">
            <NavLink to='/about' className={({isActive})=>isActive ? 'text-green-500':'text-black'}> About</NavLink>
            <NavLink to='/project' className={({isActive})=>isActive ? 'text-green-500':'text-black'}> Projects</NavLink>
        </nav>

    </header>
  )
}

export default Navbar
