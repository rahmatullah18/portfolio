import { useRouter } from 'next/router';
import React from 'react'

export default function Pagination() {
    const router = useRouter()
    const { pathname } = router
    const handleBack = () => {
        if (pathname === '/projects') {
            router.replace('/')
        } else if (pathname === '/skills&experience') {
            router.replace('/projects')
        }
    }

    const handleCountinue = () => {
        if (pathname === '/') {
            router.replace('/projects')
        } else if (pathname === '/projects') {
            router.replace('/skills&experience')
        }
    }
    return (
        <div className='flex items-center justify-between'>
            <span onClick={handleBack} className='text-lg border-b border-black hover:cursor-pointer'>{pathname === '/' ? '' : <div className='flex items-center'>🌏 Kembali</div>}</span>
            <span onClick={handleCountinue} className='text-lg border-b border-black hover:cursor-pointer'>{pathname === '/skills&experience' ? '' : <div className='flex items-center'> Selanjutnya 🛬</div>}</span>
        </div>
    )
}
