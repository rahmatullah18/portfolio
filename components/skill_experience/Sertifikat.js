import Link from 'next/link'
import React from 'react'
import SertifikatContent from './SertifikatContent'

export default function Sertifikat() {
  return (
    <div className='w-full'>
      <h3 className='text-2xl font-extrabold'>Certificates</h3>
      {SertifikatContent?.sertifikat.map((sertif, idx) => {
        return (
          <div className='relative mt-4' key={idx}>
            <div className='flex flex-col justify-between w-full h-20 px-2 py-2 border rounded-md shadow-lg '>
              <h3 className='font-semibold text-black-figma'>{sertif?.title}</h3>
              <p className='text-sm text-gray-500'>{sertif?.tanggal}</p>
            </div>
            <div className='absolute top-0 w-full h-20 transition duration-75 ease-linear delay-75 bg-gray-500 opacity-0 rounded-xl hover:opacity-90 hover:block'>
              <div className='flex items-center justify-center h-full'>
                <Link href={sertif?.url}>
                  <a target="_blank" className='px-4 py-2 text-white rounded-md bg-red-figma'>Lihat Sertifikat</a>
                </Link>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
