import { ArrowUpRightIcon } from '@heroicons/react/20/solid'
import { useRouter } from 'next/router'
import React from 'react'

export default function ButtonContent() {
  const router = useRouter()
  const redirect = (url) => {
    router.push(url)
  }

  return (
    <div className='flex items-center justify-between space-x-2'>
      <button onClick={() => redirect('mailto:rahmatulashar@mail.com')} className='w-full px-6 py-4 text-lg font-bold text-white rounded-sm bg-red-figma hover:bg-orange-500'>Hire Me</button>
      <button onClick={() => redirect('/projects')} className='flex items-center justify-center w-full px-6 py-4 text-lg font-bold text-black rounded-sm hover:text-gray-500'>Projects  <span><ArrowUpRightIcon className='w-5 h-5' /></span></button>
    </div>
  )
}
