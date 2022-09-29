import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

export default function Skill({ skills }) {
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
              <div onClick={(e) => redirect(skill?.url)} key={idx} className="flex flex-col items-center py-1 border rounded-lg cursor-pointer hover:bg-purple-figma hover:text-white">
                <div className='relative object-center w-16 h-16 rounded-full'>
                  <Image layout='fill' src={`${skill.urlLogo}`} />
                </div>
                <div className=''>{skill.title}</div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
