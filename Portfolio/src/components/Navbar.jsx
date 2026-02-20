import React, { useState } from 'react'
import OverlayMenu from "./OverlayMenu"
import Logo from "../assets/Logo.png"
import { FiMenu } from "react-icons/fi";

const Navbar = () => {

  const [menuOpen, setmenuOpen] = useState(false);
  const [visible, setvisible] = useState(true);

  return (
    <div >
      <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-50 transition-transform duration-300 ${visible ? "translate-y-0" : "translate-y-full"}`}>

      <div className='flex items-center space-x-2'>
        <img src={Logo} alt="logo" className='w-8 h-8' />
        <div className='text-2xl font-black text-white hidden sm:block'>
          Ankit
        </div>
      </div>

    <div className='block lg:absolute lg:left-1/2 lg:transform lg:translate-1/2'>
      <button onClick={() => setmenuOpen(true)}
        className='text-white text-3xl focus-outline-none'
        aria-label= "openMenu">
        <FiMenu />
      </button>

    </div>

    <div className='hidden lg:block'>

      <a href="#contact"
      className='bg-gradient-to-r from-pink-800 to-blue-800 text-white px-5 py-2 rounded-full font-medium shadow-lg opacity-90 transition-opacity duration-300'>
        Reach Out
      </a>

    </div>


      </nav>

      <OverlayMenu></OverlayMenu>
    </div>
  )
}

export default Navbar
