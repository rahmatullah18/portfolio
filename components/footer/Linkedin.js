import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LinkedinLogo from '../../public/img/LinkedIn.svg'

export default function Linkedin() {
  return (
    <div className='flex items-center'>
      <div className='relative w-10 h-10'>
        <Image layout='fill' src={LinkedinLogo} alt="linkedin" />
      </div>
      <Link href={"https://www.linkedin.com/in/rahmatullah-ashar-6461231b7/"} >
        <a className='underline' target="_blank">
          Rahmatullah Ashar
        </a>
      </Link>
    </div>
  )
}
