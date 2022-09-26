import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

export default function MyDropdown({ listNavbar }) {
    return (
        <div className="">
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="inline-flex w-full justify-center rounded-sm bg-white  px-4 py-2 text-md font-bold  text-black border-2  border-gray-600">
                        Menu
                        <ChevronDownIcon
                            className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
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
                    <Menu.Items className="absolute right-0 mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-sm bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-1 py-1 ">
                            {
                                listNavbar.map((list, idx) => {
                                    return (
                                        <Menu.Item key={idx}>
                                            {
                                                <Link href={`/${list.address}`}>
                                                    <a className=' inline-block w-full text-md font-normal capitalize hover:bg-red rounded-sm px-2 py-2 hover:bg-red-500 hover:text-white'>
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
