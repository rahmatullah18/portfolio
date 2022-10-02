import React from 'react'

export default function Experience({ experiences }) {
  return (
    <div>
      {
        experiences.experiences.map((experience, idx) => {
          return (
            <div key={idx} className='space-y-4'>
              <div className='flex justify-between p-2 border-t-2 border-black-figma'>
                <div className='flex flex-col justify-between'>
                  <div>Tahun {experience.tahun}</div>
                  <div className='text-xs text-gray-500'>{
                    experience?.bulan_selesai !== "" || experience?.bulan_selesai !== undefined || experience?.bulan_selesai !== null ? <div>
                      {experience?.bulan_mulai} - {experience?.bulan_selesai}
                    </div>
                      : <div>{experience?.bulan_mulai}</div>}</div>
                </div>
                <div className='flex flex-col items-end justify-between'>
                  <h3 className='text-lg font-semibold text-black-figma'>{experience.posisi}</h3>
                  <p className='text-sm text-red-figma'>{experience.perusahaan}</p>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
