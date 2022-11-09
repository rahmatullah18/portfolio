import { ArrowUpRightIcon } from '@heroicons/react/20/solid'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

export default function ButtonContent() {
  const [bgActive, setBgActive] = useState(false)
  const router = useRouter()
  const redirect = (url) => {
    router.push(url)
  }

  return (
    <div className='flex items-center justify-between flex-none space-x-2'>
      <button onClick={() => redirect('mailto:rahmatulashar@mail.com')} className='w-full px-6 py-4 text-lg font-bold text-white transition duration-300 ease-in-out delay-150 rounded-md bg-red-figma hover:bg-orange-500 hover:translate-y-1 hover:scale-110'>Hire Me</button>
      <button onClick={() => redirect('/projects')} className='flex items-center justify-center w-full px-6 py-4 text-lg font-bold text-black transition ease-in-out delay-150 rounded-sm hover:text-gray-500 hover:scale-110'>Projects  <span><ArrowUpRightIcon className='w-5 h-5' /></span></button>
    </div>
  )
}
