import { useSpring, animated } from '@react-spring/web'
import React from 'react'

export default function Experience({ experiences }) {
  const springs = useSpring({
    from: { x: 500, opacity: 0 },
    to: { x: 0, opacity: 1 },
  })
  return (
    <div>
      <h3 className='text-2xl font-extrabold'>Experiences </h3>
      <div className='mx-2 md:mx-0'>
        {
          experiences.experiences.map((experience, idx) => {
            return (
              <animated.div style={{
                ...springs,
              }} key={idx} className='py-2 space-y-4'>
                <div className='border-b-2 border-black'>
                  <div className='flex justify-between'>
                    <div className='flex flex-col justify-between'>
                      <div>Tahun {experience.tahun}</div>
                      <div className='text-xs text-gray-500'>{
                        experience?.bulan_selesai !== "" || experience?.bulan_selesai !== undefined || experience?.bulan_selesai !== null ? <div>
                          {experience?.bulan_mulai} - {experience?.bulan_selesai}
                        </div>
                          : <div>{experience?.bulan_mulai}</div>}</div>
                    </div>
                    <div className='flex flex-col items-end justify-between '>
                      <h3 className='text-lg font-semibold text-black-figma'>{experience.posisi}</h3>
                      <p className='text-sm text-red-figma'>{experience.perusahaan}</p>
                    </div>
                  </div>
                  <div className='mt-4 space-y-2 text-sm font-light'>
                    {experience.desc.map((item, idx) => (
                      <div key={idx}><span className='font-semibold'>{idx + 1 + '. '}</span>{item}</div>
                    ))}
                  </div>
                </div>
              </animated.div>
            )
          })
        }
      </div>
    </div>
  )
}
