import Image from 'next/image'
import React from 'react'
import ReactLogo from '../../public/img/react.svg'
import NextLogo from '../../public/img/nextJs.svg'
import cssLogo from '../../public/img/CSS3.svg'
import htmlLogo from '../../public/img/html.svg'
import tailwindLogo from '../../public/img/tailwind.svg'

export default function PictureHeader() {
  return (
    <div className='h-full'>
      <div className='relative w-full h-full bg-fixed bg-center bg-no-repeat bg-cover md:bg-local bg-picture-header'>
        <div className='absolute p-1 bg-white rounded-full top-40 md:top-1/4 md:left-1/4 left-20'>
          <div className='relative w-10 h-10'>
            <Image layout='fill' src={ReactLogo} />
          </div>
        </div>
        <div className='absolute p-1 bg-white rounded-full top-1/2 right-16'>
          <div className='relative w-10 h-10'>
            <Image layout='fill' src={NextLogo} />
          </div>
        </div>
        <div className='absolute p-1 bg-white rounded-full top-1/3 md:top-2/3 left-10'>
          <div className='relative w-10 h-10'>
            <Image layout='fill' src={htmlLogo} />
          </div>
        </div>
        <div className='absolute p-1 bg-white rounded-full top-1/3 right-20'>
          <div className='relative w-10 h-10'>
            <Image layout='fill' src={cssLogo} />
          </div>
        </div>
        <div className='absolute p-1 bg-white rounded-full top-1/2 left-10'>
          <div className='relative w-10 h-10'>
            <Image layout='fill' src={tailwindLogo} />
          </div>
        </div>

        <h2 className='absolute text-3xl text-right rounded-2xl right-2 top-2'><span className='font-bold text-red-figma'>Front-End</span> Developer<br /> #OpenTo<span className='font-bold text-purple-figma'>Work</span></h2>
      </div>
    </div>
  )
}
