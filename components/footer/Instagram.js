import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import InstagramLogo from '../../public/img/Instagram.svg'

export default function Instagram() {
  return (
    <div className='flex items-center'>
      <div className='relative w-10 h-10'>
        <Image layout='fill' src={InstagramLogo} alt="instagram" />
      </div>
      <Link href={"https://www.instagram.com/rahmatullah_ashar/?hl=id"}>
        <a className='underline' target="_blank">
          rahmatullah_ashar
        </a>
      </Link>
    </div>
  )
}
