import React from 'react'
import { Icon } from "@iconify/react";


function Skill() {
  return (
    <div className='px-24 py-6 bg-sky-100 max-sm:px-0'>
      <div className='skill  py-5 px-8 flex flex-col justify-center items-center max-sm:mt-3 '>
        <h1 className='font-bold text-3xl max-sm:text-4xl'>Our Technology</h1>
         <div className="border border-slate-400 w-32 flex justify-center">
          
        </div>
        <p className='font-medium text-slate-500 w-[50%] text-[14px] mt-1 text-center max-sm:w-full max-sm:text-[16px] max-sm:mt-4'>I specialize in front-end and back-end technologies, including React, Node.js, Express, and databases, to build efficient, scalable web applications.</p>

      </div>

      <div className='skill flex px-8 py-4  gap-6  max-sm:flex-col max-sm:mt-5 '>
        
         <div className='shadow-md flex flex-col items-center px-4 py-10 rounded-sm bg-white'>
            <div className=' border border-red-300 w-[43vh]'>
              <div className='flex justify-between items-center border border-blue-500 '>
               <div className='html text-[14px] rounded-md w-full flex justify-between border border-black font-semibold'>
                 <p className=''>HTML/CSS</p>
                 <div className='text-sm'>90%</div>
               </div>
                  <div className='flex justify-end' >
                    <Icon className='text-2xl' icon="skill-icons:html" />
                  </div>
              </div>
             

            <div className='flex justify-between items-center border border-blue-500 '>
               <div className='Tailwind text-[14px] rounded-md w-full flex justify-between border border-black font-semibold '>
                 <p className=''>TAILWIND CSS</p>
                 <div className='text-sm'>90%</div>
               </div>
               <div className='flex justify-end' >
                  <Icon className='text-2xl' icon="skill-icons:tailwindcss-dark" />
               </div>
            </div>


              <div className='flex justify-between items-center border border-blue-500 '>
              <div className='Javascript flex justify-between border border-black font-semibold text-[14px] rounded-md'>
                 <p className=''>JAVASCRIPT</p>
                 <div className='text-sm'>90%</div>
              </div>
               <div>
                 <Icon className='text-[25px]' icon="skill-icons:javascript" />

               </div>
               </div>
              
              
               <div className='flex justify-between border border-black font-serif'>
                 <p className=''>REACT JS</p>
                 <div>70%</div>
                <div>

                 </div>
                 <Icon className='text-[25px]' icon="skill-icons:html" />

              </div>
             
              
            </div>


        </div>

        <div className='shadow-md flex-col  items-center flex px-4  py-10 rounded-sm bg-white hover:bg-purple-500 hover:text-white'>
           <Icon className='text-4xl ' icon="simple-icons:nextui"></Icon>
           <h1 className='font-semibold text-3xl mt-3.5'>UI/UX Desgin</h1>
           <p className='font-medium text-black text-[13px] mt-3.5 text-center '>I design intuitive, user-friendly, and visually engaging interfaces that enhance user experiences, improve accessibility, and drive engagement by blending creativity, functionality, and usability to create seamless digital interactions that delight users</p>
           <button className='font-medium text-white hover:bg-white hover:text-black  bg-black px-18 p-1.5 text-[14px] rounded-sm mt-6'>See More</button>
        </div>

        <div className='shadow-md flex-col  items-center flex px-4 py-10 rounded-sm bg-white hover:bg-purple-500 hover:text-white'>
          <Icon  className='text-5xl' icon="formkit:wordpress" ></Icon>
          <h1 className='font-semibold text-3xl mt-2'>WordPress</h1>
           <p className='font-medium text-black text-[13px] mt-2 text-center'>I design intuitive, user-friendly, and visually engaging interfaces that enhance user experiences, improve accessibility, and drive engagement by blending creativity, functionality, and usability to create seamless digital interactions that delight users</p>
           <button className='font-medium text-white  hover:bg-white hover:text-black  bg-black px-18 py-1.5 text-[14px] rounded-sm mt-6'>See More</button>
           
        </div>

      </div>
    </div>
  )
}

export default Skill;
 