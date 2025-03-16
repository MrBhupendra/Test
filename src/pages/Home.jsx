import React from 'react'
import { Icon } from "@iconify/react";


function Home() {
  return (
    <div className=' px-24 flex justify-between max-sm:w-full max-sm:flex-col max-sm:px-0'>
      <div className=' py-11 max-sm:w-full max-sm:flex max-sm:flex-col max-sm:items-center max-sm:text-center'>
        <div className=' mt-12 flex '>
            <h1 className='font-bold border-t-3 w-2  border-purple-600 mt-2.5  '></h1>
            <h3 className='font-bold text-4xl'>Hello</h3>
        </div>

        <div className=' font-bold text-7xl flex  gap-1.5 mt-2 max-sm:w-full max-sm:text-5xl max-sm:flex max-sm:justify-center '>
          <h1>I'm </h1><h1 className='text-purple-500 border-b-4 p-1 border-purple-500'>Bhupendra,</h1>
        </div>

        <div className=' font-bold text-6xl flex  gap-1.5 mt-2 max-sm:mt-3'>
          <h1>Full Stack Developer</h1>
        </div>

        <div className=' w-full flex '>
          <p className='font-medium text-slate-400 py-5 px-1 w-[600px]'>I build robust, scalable web applications from the ground up, specializing in both frontend and backend development. Let’s create something amazing together<hr className='mt-1.5'/></p>
          
        </div>

        <div className=' flex items-center p-1 py-3 gap-9'>

          <a><button className=' px-5 py-3  rounded-3xl  bg-purple-500 text-white font-medium flex items-center gap-2'>Portfolio<span className='text-2xl  rounded-2xl bg-black'><Icon icon="mdi-light:arrow-right"/></span></button></a>

          <a><button className=' px-10 py-3 border border-black rounded-3xl text-black font-medium '>Hire Me</button></a>

        </div>

        </div>

        <div className='flex justify-center items-center  px-2 '>
          <div className="">
          <img src='https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?t=st=1742128977~exp=1742132577~hmac=c7ee07ce939c69506488b8d7506e80fadccf92bb5392bc4441605d36ffaaa1a6&w=996'
          className='h-[60vh] object-cover'></img>
         
          </div>
        </div>
        
    </div>
  )
}

export default Home;
