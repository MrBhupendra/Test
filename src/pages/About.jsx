import React from 'react'
import { Icon } from "@iconify/react";

function About() {
  return (
    <>
    <div className='px-24  py-10 max-sm:px-0 max-sm:flex-col max-sm:py-20 bg-purple-500 '>
        <div className='flex flex-col items-center'>
          <h1 className=' font-bold flex text-3xl max-sm:text-4xl '>About Me</h1>
           <div className="border border-slate-200 w-32 flex justify-center">
          
        </div>
          <p className='font-medium text-slate-600 w-[50%] text-[14px] mt-1 text-center max-sm:w-full max-sm:text-[16px] max-sm:mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Curabitur vehicula, erat at feugiat varius, odio sapien suscipit nisl, nec fermentum lacus felis at nisi</p>
        </div>
            
       <div className='flex mt-6'>
        <div className=' w-full  '>
            <img className='object-cover h-full max-sm:h-[50vh]' src='https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
           
        </div>
        <div className=' w-full px-12 py-20 flex flex-col gap-3 justify-center bg-blue-300  max-sm:py-17'>
          
            <h1 className='about-headline font-serif text-2xl max-sm:mt-3 max-sm:text-3xl'>Full-Stack Developer Crafting Scalable & Engaging Experiences</h1>
            <p className='font-medium text-slate-500 text-[14px] max-sm:text-[16px] max-sm:mt-3'>I'm a full-stack web developer passionate about creating scalable, user-friendly applications with seamless functionality, modern design, and efficient performance.</p>
            <div className='py-2'>
              <button className='  bg-black  font-semibold flex justify-center gap-1 rounded-full max-sm:mt-3'><span className=' flex justify-center items-center text-2xl text-white  ml-2  '><Icon icon="mdi-light:arrow-right"/></span><span className='bg-purple-600  py-2.5 rounded-full px-5'>Go Project</span></button> 
            </div>
 
        </div>
        </div>
      
    </div>
    </ >
  )
}

export default About;
