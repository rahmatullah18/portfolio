import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import GithubLogo from '../../public/img/Github.svg'

export default function Github() {
  return (
    <div className='flex items-center'>
      <div className='relative w-10 h-10'>
        <Image layout='fill' src={GithubLogo} alt="github" />
      </div>
      <Link href={"https://github.com/rahmatullah18"} >
        <a className='underline' target={'_blank'}>
          rahmatullah18
        </a>
      </Link>
    </div>
  )
}
