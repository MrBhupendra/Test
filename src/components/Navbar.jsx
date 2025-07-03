import React from 'react'
import { Icon } from "@iconify/react";


function Navbar() {
  return (
    <div className='sticky top-0 '>
      <header className='header bg-white w-full sticky top-0 px-24  max-sm:px-2 z-40 '>
        <nav className='border-b border-slate-400  flex justify-between  items-center p-2   max-sm:w-auto max-sm:flex max-sm:justify-between  max-sm:px-3'>
          <h2 className='font-bold text-[25px]'>PORTFOLIO</h2>
           <ul className='flex justify-between border-none border-black w-[450px] font-semibold text-black max-sm:hidden '>
              <li><a>Home</a></li>
              <li><a>About</a></li>
              <li><a>Skill</a></li>
              <li><a>Profolio</a></li>
              <li><a>Contect</a></li>
              
              
           </ul>
           <div>

            <a><button className=' px-7 py-2  rounded-3xl bg-purple-500 text-white font-semibold '>Get Sarted</button></a>
           </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
