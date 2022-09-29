import Image from 'next/image'
import React from 'react'

export default function PictureHeader() {
  return (
    <div className='h-full'>
      <div className='relative w-full h-full bg-fixed bg-center bg-no-repeat bg-cover md:bg-local bg-picture-header'>
        <div className='absolute p-1 bg-white rounded-full top-40 md:top-1/4 md:left-1/4 left-20'>
          <div className='relative w-10 h-10'>
            <Image layout='fill' src={`https://res.cloudinary.com/grosir113/image/upload/v1664373539/portfolio/react_n8946a.svg`} alt="React" />
          </div>
        </div>
        <div className='absolute p-1 bg-white rounded-full top-1/2 right-16'>
          <div className='relative w-10 h-10'>
            <Image layout='fill' src={`https://res.cloudinary.com/grosir113/image/upload/v1664373539/portfolio/nextJs_iwqjhn.svg`} alt="NextJs" />
          </div>
        </div>
        <div className='absolute p-1 bg-white rounded-full top-1/3 md:top-2/3 left-10'>
          <div className='relative w-10 h-10'>
            <Image layout='fill' src={`https://res.cloudinary.com/grosir113/image/upload/v1664373527/portfolio/html_dz6l73.svg`} alt="html" />
          </div>
        </div>
        <div className='absolute p-1 bg-white rounded-full top-1/3 right-20'>
          <div className='relative w-10 h-10'>
            <Image layout='fill' src={`https://res.cloudinary.com/grosir113/image/upload/v1664373527/portfolio/CSS3_zfzxrp.svg`} alt="css" />
          </div>
        </div>
        <div className='absolute p-1 bg-white rounded-full top-1/2 left-10'>
          <div className='relative w-10 h-10'>
            <Image layout='fill' src={`https://res.cloudinary.com/grosir113/image/upload/v1664373539/portfolio/tailwind_zznkhf.svg`} alt="tailwindcss" />
          </div>
        </div>

        <h2 className='absolute text-3xl text-right rounded-2xl right-2 top-2'><span className='font-bold text-red-figma'>Front-End</span> Developer<br /> #OpenTo<span className='font-bold text-purple-figma'>Work</span></h2>
      </div>
    </div>
  )
}
