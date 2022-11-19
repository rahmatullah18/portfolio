import React from 'react'
import Navbar from './navbar/Navbar'
import Pagination from './Pagination'

export default function Layout({ children }) {
    return (
        <div className='flex flex-col h-screen bg-white font-nunito'>
            <Navbar />
            {children}
        </div>
    )
}
