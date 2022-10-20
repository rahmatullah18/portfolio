import { useTransition, animated } from '@react-spring/web'
import React, { useState } from 'react'

export default function Testing() {
  const [items, setItems] = useState([])
  const transition = useTransition(items, {
    from: { x: -100, y: 100, opacity: 0, width: 10, height: 10 },
    enter: item => async (next) => (
      await next({ y: 0, opacity: 1, delay: item.delay }),
      await next({ x: 0, width: 60, height: 60 })
    ),
    leave: { x: 100, y: 100, opacity: 0 }
  })
  const handleAnimation = () => {
    setItems((item) => item.length ? [] : [
      { delay: 200, y: -100 },
      { delay: 400, y: -50 },
      { delay: 600, y: 0 },
    ])
  }
  return (
    <div className='flex flex-col items-center justify-center mt-10'>
      <div>
        <button className='px-4 py-2 text-white bg-red-600 rounded-lg ' onClick={handleAnimation}>{items.length ? 'un-mount' : 'mount'}</button>
      </div>
      <div className='mt-10 space-y-3'>
        {transition((style, item) =>
          item ? <animated.div style={style} className='w-20 h-20 bg-red-500 rounded-full'></animated.div> : ''
        )}
      </div>
    </div>
  )
}
