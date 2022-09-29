import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Github() {
  return (
    <div className='flex items-center'>
      <div className='relative w-10 h-10'>
        <Image layout='fill' src={`https://res.cloudinary.com/grosir113/image/upload/v1664373527/portfolio/GitHub_n2pqbb.svg`} alt="github" />
      </div>
      <Link href={"https://github.com/rahmatullah18"} >
        <a className='underline' target={'_blank'}>
          rahmatullah18
        </a>
      </Link>
    </div>
  )
}
