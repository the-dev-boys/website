import React from "react"
import { default as logo } from './logo.svg';

function Navbar() {
  return (
    <nav className='flex fixed top-0 py-10 h-16 w-full z-10 items-center shadow-lg justify-center bg-white translucent 
                    transition-colors duration-300 dark:bg-gray-600 '>
      <img alt="logo" src={logo} className='mt-2' width='170' heigth='auto'/>
    </nav>      
  )
}

export default Navbar;
  