import React from 'react'

export default function Container({ children }) {
  return (
    <div className='relative mx-2 md:mx-16'>
      {children}
    </div>
  )
}
