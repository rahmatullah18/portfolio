import { ArrowDownCircleIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import React from 'react'

export default function Title() {
  return (
    <div className='flex-col space-y-3'>
      <div className='flex items-center justify-between space-x-2'>
        <h1 className='text-5xl font-extrabold drop-shadow-md'>Hi! I Am </h1>
        <Link href={'https://www.cakeresume.com/rahmatullah-ashar'}>
          <a className='flex items-center gap-2 px-4 py-2 text-lg font-normal text-white rounded-full bg-purple-figma' target={'_blank'}><ArrowDownCircleIcon className='w-7 h-7' /> Resume </a></Link>
      </div>
      <div className='flex items-center justify-start'>
        <h1 className='text-4xl font-extrabold tracking-wide drop-shadow-md'>Rahmatullah Ashar</h1>
      </div>
    </div>
  )
}
