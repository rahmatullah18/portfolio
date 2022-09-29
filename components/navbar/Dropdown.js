import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

export default function MyDropdown({ listNavbar, path }) {
	return (
		<div className="">
			<Menu as="div" className="relative inline-block text-left">
				<div>
					<Menu.Button className="inline-flex justify-center w-full px-4 py-2 font-bold text-black bg-white border-2 rounded-sm border-black-figma text-md">
						Menu
						<ChevronDownIcon
							className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
							aria-hidden="true"
						/>
					</Menu.Button>
				</div>
				<Transition
					as={Fragment}
					enter="transition ease-out duration-100"
					enterFrom="transform opacity-0 scale-95"
					enterTo="transform opacity-100 scale-100"
					leave="transition ease-in duration-75"
					leaveFrom="transform opacity-100 scale-100"
					leaveTo="transform opacity-0 scale-95"
				>
					<Menu.Items className="absolute right-0 z-20 w-32 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
						<div className="px-1 py-1 ">
							{
								listNavbar.map((list, idx) => {
									return (
										<Menu.Item key={idx}>
											{
												<Link href={`/${list.address}`}>
													<a className={`inline-block w-full px-2 py-2 font-normal capitalize rounded-sm text-md hover:bg-red hover:bg-purple-figma hover:font-semibold hover:text-white ${list.address === path ? 'bg-purple-figma text-white' : ''}`}>
														{list.name}
													</a></Link>
											}
										</Menu.Item>
									)
								})
							}
						</div>
					</Menu.Items>
				</Transition>
			</Menu>
		</div>
	)
}
