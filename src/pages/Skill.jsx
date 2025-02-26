import React from 'react'
import { Icon } from "@iconify/react";


function Skill() {
  return (
    <div className='px-28 py-5'>
      <div className='skill border border-black py-5 px-8'>
        <h1 className='font-semibold text-3xl'>Our Technology</h1>
        <p className='font-medium text-slate-500 w-[50%] text-[14px]'>I specialize in front-end and back-end technologies, including React, Node.js, Express, and databases, to build efficient, scalable web applications.</p>

      </div>
      <div className='skill flex px-8 '>
        <div className='border border-black flex-col justify-center items-center flex text-center'>
           <Icon className='text-3xl' icon="simple-icons:nextui"></Icon>
           <h1 className='font-semibold text-2xl'>UI/UX Desgin</h1>
           <p className='font-medium text-slate-500 text-[12px] '>I design intuitive, user-friendly, and visually engaging interfaces that enhance user experiences, improve accessibility, and drive engagement by blending creativity, functionality, and usability to create seamless digital interactions that delight users</p>
        </div>
        <div className='border border-black flex flex-col items-center text-center'>
          <Icon  className='text-4xl' icon="mdi:web-box"></Icon>
        <h1 className='font-semibold text-2xl'>Wab Design</h1>
           <p className='font-medium text-slate-500 text-[12px] '>I design intuitive, user-friendly, and visually engaging interfaces that enhance user experiences, improve accessibility, and drive engagement by blending creativity, functionality, and usability to create seamless digital interactions that delight users</p>
       
        </div>
        <div className='border border-black flex-col justify-center items-center flex text-center'>
          <Icon  className='text-4xl' icon="formkit:wordpress" ></Icon>
        <h1 className='font-semibold text-2xl'>WordPress</h1>
           <p className='font-medium text-slate-500 text-[12px] '>I design intuitive, user-friendly, and visually engaging interfaces that enhance user experiences, improve accessibility, and drive engagement by blending creativity, functionality, and usability to create seamless digital interactions that delight users</p>
       
        </div>

      </div>
    </div>
  )
}

export default Skill
 