import React from 'react'
import { Icon } from "@iconify/react";


function Skill() {
  return (
    <div className='px-28 py-5 bg-sky-100 '>
      <div className='skill border border-black py-5 px-8'>
        <h1 className='font-semibold text-3xl'>Our Technology</h1>
        <p className='font-medium text-slate-500 w-[50%] text-[12px] mt-1'>I specialize in front-end and back-end technologies, including React, Node.js, Express, and databases, to build efficient, scalable web applications.</p>

      </div>

      <div className='skill flex px-8 py-2  gap-6 border border-black '>
        <div className='shadow-md flex-col  items-center flex px-4  py-7 rounded-sm bg-white'>
           <Icon className='text-3xl ' icon="simple-icons:nextui"></Icon>
           <h1 className='font-semibold text-2xl mt-2'>UI/UX Desgin</h1>
           <p className='font-medium text-slate-500 text-[11px] mt-3.5 text-center '>I design intuitive, user-friendly, and visually engaging interfaces that enhance user experiences, improve accessibility, and drive engagement by blending creativity, functionality, and usability to create seamless digital interactions that delight users</p>
           <button className='font-medium text-white bg-black px-14 py-1 text-[12px] rounded-sm mt-3.5'>See More</button>
        </div>

        <div className='shadow-md flex flex-col items-center px-4 py-7 rounded-sm bg-white'>
          <Icon  className='text-4xl' icon="mdi:web-box"></Icon>
          <h1 className='font-semibold text-2xl mt-1'>Wab Design</h1>
           <p className='font-medium text-slate-500 text-[11px] mt-3 text-center'>I design intuitive, user-friendly, and visually engaging interfaces that enhance user experiences, improve accessibility, and drive engagement by blending creativity, functionality, and usability to create seamless digital interactions that delight users</p>
           <button className='font-medium text-white bg-black px-14 py-1 text-[12px] rounded-sm mt-3.5'>See More</button>
           
        </div>
        <div className='shadow-md flex-col  items-center flex px-4 py-7 rounded-sm bg-white'>
          <Icon  className='text-3xl' icon="formkit:wordpress" ></Icon>
          <h1 className='font-semibold text-2xl mt-2'>WordPress</h1>
           <p className='font-medium text-slate-500 text-[11px] mt-3 text-center'>I design intuitive, user-friendly, and visually engaging interfaces that enhance user experiences, improve accessibility, and drive engagement by blending creativity, functionality, and usability to create seamless digital interactions that delight users</p>
           <button className='font-medium text-white bg-black px-14 py-1 text-[12px] rounded-sm mt-3.5'>See More</button>
           
        </div>

      </div>
    </div>
  )
}

export default Skill
 