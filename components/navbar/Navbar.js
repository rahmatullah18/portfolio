import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import content from './content'
import MyDropdown from './Dropdown'

export default function Navbar() {
    const router = useRouter()
    const path = router.pathname
    return (
        <div className='flex items-center justify-between py-2 mx-2 mt-2 border-b '>
            <h1 className='text-2xl font-extrabold'>{content?.title}<span className='text-2xl text-red-500 '>.</span></h1>
            <div className='block md:hidden'>
                <MyDropdown path={path} listNavbar={content?.listNavbar} />
            </div>
            <div className='hidden md:flex md:items-center md:space-x-4'>
                {
                    content?.listNavbar.map((list, idx) => {
                        return (
                            <Link key={idx} href={`${list.address}`}>
                                <a className={` text-lg hover:border-b-2 hover:border-purple-figma font-normal capitalize ${list.address === path ? 'border-b-2 border-purple-figma' : ''}`}>{list.name}</a>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}
