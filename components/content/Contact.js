import React from 'react'

export default function Contact() {
  return (
    <div className='grid items-center grid-cols-2'>
      <div className='flex flex-col space-y-5'>
        <div className=''>
          <h3 className='text-4xl font-extrabold'>+3 </h3>
          <h3 className='font-bold text-md'>Project Client</h3>
        </div>
        <div className=''>
          <h3 className='text-4xl font-extrabold'>+7 </h3>
          <h3 className='font-bold text-md'>Project Latihan</h3>
        </div>
      </div>
      <div className='flex flex-col justify-end '>
        <div className=''>
          <h3 className='text-2xl font-extrabold'>Contact </h3>
          <h3 className='text-sm font-bold'>rahmatulashar@gmail.com</h3>
        </div>
      </div>
    </div>
  )
}
