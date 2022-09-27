import React from 'react'
import content from './content'
import MyDropdown from './Dropdown'

export default function Navbar() {
    return (
        <div className='flex items-center justify-between py-2 mx-2 mt-2 border-b '>
            <h1 className='text-2xl font-extrabold'>{content?.title}<span className='text-2xl text-red-500 '>.</span></h1>
            <div><MyDropdown listNavbar={content?.listNavbar} /></div>
        </div>
    )
}
