import { ChevronDoubleDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import content from './content'
import MyDropdown from './Dropdown'

export default function Navbar() {
    const router = useRouter()
    const path = router.pathname
    return (
        <div className='z-20 flex items-center justify-between py-2 mx-2 mt-2 bg-white border-b '>
            <h1 className='text-2xl font-extrabold'>{content?.title}<span className='text-2xl text-red-500 '>.</span></h1>
            <div className='block md:hidden'>
                <MyDropdown path={path} listNavbar={content?.listNavbar} />
            </div>
            <div className='hidden md:flex md:items-center md:space-x-4'>
                {
                    content?.listNavbar.map((list, idx) => {
                        return (
                            <div key={idx} className='relative flex flex-col items-center justify-center '>
                                <Link href={`${list.address}`}>
                                    <a className={` text-lg  ${list.address === path ? 'text-indigo-600 animate-pulse' : ''}  font-semibold capitalize `}>{list.name}</a>
                                </Link>
                                <div className={`absolute  flex flex-col items-center w-full -top-1 ${list.address === path ? '' : 'hidden'}`}>
                                    <ChevronDoubleDownIcon className='absolute w-5 h-5 text-indigo-600 -top-2 animate-pulse' />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
