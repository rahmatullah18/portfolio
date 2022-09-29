import React from 'react'

export default function Title() {
  return (
    <div className='flex-col space-y-3'>
      <div className='flex items-center justify-between space-x-2'>
        <h1 className='text-5xl font-extrabold'>Hi! I Am </h1>
        <span className='px-4 py-2 text-lg font-normal text-white rounded-full bg-purple-figma'>Front-End </span>
      </div>
      <div className='flex items-center justify-start'>
        <h1 className='text-4xl font-extrabold tracking-wide'>Rahmatullah Ashar</h1>
      </div>
    </div>
  )
}
