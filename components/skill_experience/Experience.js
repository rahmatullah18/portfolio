import React from 'react'

export default function Experience({ experiences }) {
  return (
    <div>
      {
        experiences.experiences.map((experience, idx) => {
          return (
            <div key={idx} className='space-y-4'>
              <div className='flex justify-between p-2 border-t-2 border-black-figma'>
                <div>
                  Tahun {experience.tahun}
                </div>
                <div className='flex flex-col items-end'>
                  <h3 className='text-lg font-semibold'>{experience.posisi}</h3>
                  <p className='text-sm text-gray-500'>{experience.perusahaan}</p>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
