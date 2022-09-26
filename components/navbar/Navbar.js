import React from 'react'
import content from './content'
import MyDropdown from './Dropdown'

export default function Navbar() {
    return (
        <div className='flex mx-2 justify-between items-center my-2'>
            <h1 className='font-extrabold text-2xl'>{content?.title}<span className='text-2xl text-red-500 '>.</span></h1>
            <div><MyDropdown listNavbar={content?.listNavbar} /></div>
        </div>
    )
}
