import React from "react"
import { default as logo } from './logo.svg';

function Navbar() {
  return (
    <nav className='py-10 flex h-16 items-center justify-center border-b-2 shadow-md fixed w-full z-50 bg-white bg-opacity-75 top-0'>
      <img src={logo} className='mt-2' width='170' heigth='auto'/>
    </nav>      
  )
}

export default Navbar;
  