import React from 'react'
import { Icon } from "@iconify/react";


function Home() {
  return (
    <div className='border border-black px-24 flex justify-between'>
      <div className='border border-black py-11'>
        <div className=' mt-12 flex    '>
            <h1 className='font-bold border-t-3 w-2  border-purple-600 mt-2.5  '></h1>
            <h3 className='font-bold text-4xl'>Hello</h3>
        </div>

        <div className=' font-bold text-7xl flex  gap-1.5 mt-2'>
          <h1>I'm </h1><h1 className='text-purple-500 border-b-4 p-1 border-purple-500'>Bhupendra,</h1>
        </div>

        <div className=' font-bold text-6xl flex  gap-1.5 mt-2'>
          <h1>Full Stack Developer</h1>
        </div>

        <div className=' w-full flex '>
          <p className='font-medium text-slate-400 py-5 px-1 w-[600px]'>I build robust, scalable web applications from the ground up, specializing in both frontend and backend development. Let’s create something amazing together<hr className='mt-1.5'/></p>
          
        </div>

        <div className=' flex items-center p-1 py-3 gap-9'>

          <a><button className=' px-5 py-3  rounded-3xl  bg-purple-500 text-white font-medium flex items-center gap-2'>Portfolio<span className='text-2xl  rounded-2xl bg-black'><Icon icon="mdi-light:arrow-right"/></span></button></a>

          <a><button className='border border-black px-10 py-3  rounded-3xl text-black font-medium '>Hire Me</button></a>

        </div>

        </div>

        <div className='flex justify-center items-center border border-black px-3 '>
          <div className="border-8 border-purple-400 border-x-blue-300 rounded-full">
          <img src='src\img\img1.webp'
          className=''></img>
         
          </div>
        </div>
        
    </div>
  )
}

export default Home;
