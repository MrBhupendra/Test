import React from 'react'

function Navbar() {
  return (
    <div className='sticky top-0'>
      <header className='border border-black'>
        <nav className='flex justify-between px-24 items-center p-2 bg-white'>
          <div><h2 className='font-bold text-[25px]'>LOGO</h2></div>
           <ul className='flex justify-between border-none border-black w-[450px] font-semibold text-black'>
              <li><a>Home</a></li>
              <li><a>About</a></li>
              <li><a>Skill</a></li>
              <li><a>Profolio</a></li>
              <li><a>Contect</a></li>
              
              
           </ul>
           <div>
            <a><button className=' px-7 py-2  rounded-3xl bg-purple-500 text-white font-semibold '>Button</button></a>
           </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
