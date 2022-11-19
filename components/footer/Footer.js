import React from 'react'
import Container from '../Container'
import Github from './Github'
import Instagram from './Instagram'
import Linkedin from './Linkedin'

export default function Footer() {
	return (
		<div className='bg-gray-800 h-52'>
			<Container>
				<div className='grid items-center grid-cols-2 gap-2 py-5 mx-5'>
					<div className='flex justify-center'>
						<span className='text-white'> Built with <a href="https://nextjs.org/" className='underline'>NextJs</a> & <a href='https://tailwindcss.com/' className='underline'>Tailwind CSS</a> </span>
					</div>
					<div className='flex flex-col space-y-2 text-white md:items-center md:justify-center'>
						<Instagram />
						<Github />
						<Linkedin />
					</div>
				</div>
				<div className='text-center text-gray-400'>Copyright © 2022 Rahmatullah Ashar.</div>
			</Container>
		</div>
	)
}
