import React from 'react'

function Footer() {
  return (
    <div className='px-20 w-full bg-black max-sm:flex max-sm:flex-col max-sm:px-5 mt-'>
      <div className='p-10 text-white flex gap-6 border-b border-slate-500 max-sm:flex max-sm:flex-col'>

        <div className='left w-full      '>
        <img src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG6.png" alt="" srcset="" className='object-cover h-35 w-35 border-b-[5px] border-blue-600 ' />
        </div>

        <div className='right w-full  flex flex-col gap-11 '>
          <h1 className='text-4xl font-semibold font-sans max-sm:flex max-sm:justify-center'>FOOTER CONTECT</h1>
          <div className='w-full flex max-sm:flex max-sm:flex-col  max-sm:justify-center'>
            <div className='w-full flex flex-col gap-6  py-4 px-2 max-sm:py-0 '>
              <h1 className='text-[22px] max-sm:flex max-sm:justify-center'>About Us</h1>
              <span className='flex flex-col gap-1 text-gray-400'>
              <p className=' max-sm:flex max-sm:justify-center'>Mission</p>
              <p className=' max-sm:flex max-sm:justify-center'>Team</p>
              <p className=' max-sm:flex max-sm:justify-center'>Newseletter</p>
              </span>
            </div>
            <div className='w-full flex flex-col gap-6 py-4 px-2'>
              <h1 className='text-[22px] max-sm:flex max-sm:justify-center'>Support</h1>
              <span className='flex flex-col gap-1 text-gray-400'>
              <p className=' max-sm:flex max-sm:justify-center'>Contact</p>
              <p className=' max-sm:flex max-sm:justify-center'>Refund Policy</p>
              <p className=' max-sm:flex max-sm:justify-center'>FAQ's</p>
              </span>
            </div>
            <div className='w-full flex flex-col gap-6 py-4 px-2'>
              <h1 className='text-[22px] max-sm:flex max-sm:justify-center'>Social</h1>
              <span className='flex flex-col gap-1 text-gray-400'>
              <p className=' max-sm:flex max-sm:justify-center'>Instagram</p>
              <p className=' max-sm:flex max-sm:justify-center'>Linkedin</p>
              <p className=' max-sm:flex max-sm:justify-center'>Twitter</p>
              </span>
            </div>
          </div>

        </div>

      </div>

      <div className='text-white w-full flex py-6'>

        <div className='left w-full flex'>
          <div className='w-full'>
          <p>
            Copyright @ Portfolio
          </p>
          </div>
          <div className='w-full'>
          <p>
            Terms of Service
          </p>
          </div>
        </div>

        <div className='right w-full flex justify-end'>
        <p>
          Bact To Top
        </p>

        </div>

      </div>

    </div>
  )
}

export default Footer