import React from 'react'
import Pagination from '../Pagination'
import About from './About'
import ButtonContent from './ButtonContent'
import Contact from './Contact'
import Title from './Title'

export default function Content() {
  return (
    <div className='relative flex flex-col'>
      <div className='z-10 mx-5 my-10 space-y-10 md:mx-10' >
        {/* title */}
        <Title />
        {/* about */}
        <About />
        {/* buttton */}
        <ButtonContent />
        {/* contact */}
        <Contact />
        <Pagination />
      </div>
    </div>
  )
}
