import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Instagram() {
  return (
    <div className='flex items-center'>
      <div className='relative w-10 h-10'>
        <Image layout='fill' src={`https://res.cloudinary.com/grosir113/image/upload/v1664412700/portfolio/Instagram_gr7lu7.svg`} alt="instagram" />
      </div>
      <Link href={"https://www.instagram.com/rahmatullah_ashar/"}>
        <a className='underline' target="_blank">
          rahmatullah_ashar
        </a>
      </Link>
    </div>
  )
}
