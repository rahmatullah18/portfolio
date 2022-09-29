import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Linkedin() {
  return (
    <div className='flex items-center'>
      <div className='relative w-10 h-10'>
        <Image layout='fill' src={`https://res.cloudinary.com/grosir113/image/upload/v1664412700/portfolio/LinkedIn_oe94hh.svg`} alt="linkedin" />
      </div>
      <Link href={"https://www.linkedin.com/in/rahmatullah-ashar-6461231b7/"} >
        <a className='underline' target="_blank">
          Rahmatullah Ashar
        </a>
      </Link>
    </div>
  )
}
