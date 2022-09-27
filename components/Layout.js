import React from 'react'
import Footer from './footer/Footer'
import Navbar from './navbar/Navbar'

export default function Layout({ children }) {
    return (
        <div className='flex flex-col justify-between h-screen bg-white font-roboto'>
            <div className='h-full'>
                <Navbar />
                {children}
            </div>
            {/* <div className=''>
                <Footer />
            </div> */}
        </div>
    )
}
