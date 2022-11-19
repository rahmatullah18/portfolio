import { useSpring, animated } from '@react-spring/web'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

export default function Skill({ skills }) {
  const springs = useSpring({
    from: { x: -500, width: 10, opacity: 0, height: 10 },
    to: { x: 0, width: 100, height: 100, opacity: 1 },
  })
  const router = useRouter()
  const redirect = (url) => {
    router.push(url)
  }
  return (
    <div className='space-y-4 '>
      <div className='grid grid-cols-3 gap-4'>
        {
          skills?.skills.map((skill, idx) => {
            return (
              <animated.div style={{
                ...springs,
              }} onClick={(e) => redirect(skill?.url)} key={idx} className="flex flex-col items-center py-1 rounded-lg cursor-pointer hover:bg-purple-figma hover:text-white shadow-custom">
                <div className='relative object-center w-16 h-16 rounded-full'>
                  <Image layout='fill' src={`${skill.urlLogo}`} alt={"skill"} />
                </div>
                <div className=''>{skill.title}</div>
              </animated.div>
            )
          })
        }
      </div>
    </div>
  )
}
