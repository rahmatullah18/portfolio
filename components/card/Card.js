import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { MapPinIcon } from '@heroicons/react/20/solid';

export default function Card({ project1 }) {
  return (
    <div className="p-1 overflow-hidden bg-white border shadow-custom rounded-xl">
      <Link href={`${project1.url}`}>
        <a target={'_blank'}>
          <div className="relative w-full h-40 overflow-hidden shadow-xl rounded-xl md:h-60">
            <Image src={`${project1.imgUrl}`} alt="project" className="object-cover" layout='fill' />
          </div>
          <div>
            <div className='p-2 space-y-2'>
              <div className='flex items-center justify-between'>
                <h1 className="text-lg font-semibold capitalize">{project1.title}</h1>
                <h3 className='flex items-center p-1 font-light text-black-figma'>{project1.perusahaan} <MapPinIcon className='w-5 h-5' /></h3>
              </div>
              <div className='px-3 text-xs text-gray-700'>
                {project1.desc}
              </div>
              <p className="flex flex-wrap items-center">
                {
                  project1?.teknologi.map((item, idx) => {
                    return (
                      <span key={idx} className="px-2 py-1 mt-1 mr-1 text-xs font-semibold text-white rounded-full shadow-md bg-red-figma">
                        {item.name}
                      </span>
                    )
                  })
                }
              </p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}
