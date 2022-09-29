import React from 'react'
import About from './About'
import ButtonContent from './ButtonContent'
import Contact from './Contact'
import Title from './Title'

export default function Content() {
  return (
    <div className='relative flex flex-col '>
      <div className='mx-5 my-10 space-y-10'>
        {/* title */}
        <Title />
        {/* about */}
        <About />
        {/* buttton */}
        <ButtonContent />
        {/* contact */}
        <Contact />
      </div>
    </div>
  )
}
