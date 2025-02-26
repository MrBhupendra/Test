import React from 'react'
import { Icon } from "@iconify/react";


function Home() {
  return (
    <div className='border border-black px-28'>
        <div className='text-center mt-15 flex justify-center gap-1 '>
            <h1 className='font-bold border-t-3 w-3  border-purple-600 mt-2.5  '></h1>
            <h3 className='font-semibold text-[22px]'>Hello</h3>
        </div>

        <div className=' font-semibold text-5xl flex justify-center gap-1.5'>
          <h1>I'm </h1><h1 className='text-purple-500 border-b-4 p-1 border-purple-500'>Bhupendra,</h1>
        </div>

        <div className=' font-semibold text-6xl flex justify-center gap-1.5 mt-2'>
          <h1>Full Stack</h1><h1>Developer</h1>
        </div>
        <div className='flex justify-center items-center border border-black  '>
          <div className="1">
          <img src='src\img\img1.webp'
          className='border border-black'></img>
          <div className='border border-black flex justify-evenly items-center p-1'>

          <a><button className=' px-5 py-2.5  rounded-3xl  bg-purple-500 text-white font-medium flex items-center gap-2'>Portfolio<span className='text-2xl  rounded-2xl bg-black'><Icon icon="mdi-light:arrow-right"/></span></button></a>

          <a><button className='border border-black px-10 py-2.5  rounded-3xl text-black font-medium '>Hire Me</button></a>
          </div>
          </div>
        </div>
        
    </div>
  )
}

export default Home;
