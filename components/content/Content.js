import React, { useState } from 'react'
import Wave from 'react-wavify'
import About from './About'
import ButtonContent from './ButtonContent'
import Contact from './Contact'
import Title from './Title'

export default function Content() {
  const [waveHeight, setWaveHeight] = useState(false)
  return (
    <div className='relative flex flex-col' onMouseEnter={() => setWaveHeight(true)} onMouseLeave={() => setWaveHeight(false)}>
      <div className='z-10 mx-5 my-10 space-y-10 md:mx-10' >
        {/* title */}
        <Title />
        {/* about */}
        <About />
        {/* buttton */}
        <ButtonContent />
        {/* contact */}
        <Contact />
      </div>
      <Wave className={`absolute bottom-0 transition delay-75 ease-in duration-500 ${waveHeight ? '-translate-y-16' : ""}`} mask="url(#mask)" fill={'#1277b0'}
        options={{
          height: 20,
          amplitude: 20,
          speed: 0.15,
          points: 5
        }}>
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="0" stopColor="white" />
            <stop offset="0.5" stopColor="black" />
          </linearGradient>
          <mask id="mask">
            <rect x="0" y="0" width="2000" height="300" fill="url(#gradient)" />
          </mask>
        </defs>
      </Wave>
    </div>
  )
}
