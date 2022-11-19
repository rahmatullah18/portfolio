import { ArrowUpRightIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export default function Contact() {
  const router = useRouter()
  const redirect = (url) => {
    router.push(url)
  }
  return (
    <div className='grid items-center grid-cols-2'>
      <div className='flex flex-col space-y-5'>
        <div className=''>
          <div onClick={() => redirect('/skills&experience')} className='flex items-center justify-center px-6 py-4 text-lg font-bold text-black underline capitalize transition ease-in-out delay-150 rounded-sm cursor-pointer w-fit hover:text-gray-500 hover:scale-110'>see my skills and experience  <span><ArrowUpRightIcon className='w-5 h-5' /></span></div>
        </div>
      </div>
      <div className='flex flex-col justify-end '>
        <div className=''>
          <h3 className='text-2xl font-extrabold'>Contact </h3>
          <h3 className='text-sm font-bold'>rahmatulashar@gmail.com</h3>
          <Link href={`https://wa.me/+6289695003439`}>
            <a className='text-sm font-normal text-green-600 underline hover:text-green-700'>Sendme Whatsapp Message</a>
          </Link>
        </div>
      </div>
    </div>
  )
}
