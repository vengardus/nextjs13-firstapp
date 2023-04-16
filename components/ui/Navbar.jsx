"use client"
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import { Disclosure, Menu, Transition } from '@headlessui/react'

const logo = '/assets/img/logo-gardus.png'
const navigation = [
  {
    name: 'Inicio',
    href: '/',
  },
  {
    name: 'Apis',
    href: '#',
    children: [
      {
        name: 'SpaceX',
        href: '/spacex',
      },
      {
        name: 'Producto 2',
        href: '#',
      },
    ],
  },
  {
    name: 'About',
    href: '/about',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Link href="/">
                    <Image
                      className='object-fill h-14 w-auto'
                      src={logo}
                      alt="logo"
                      width={100}
                      height={100}
                      priority={true}
                    />
                  </Link>
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) =>
                      item.children ? (
                        <Menu key={item.name}>
                          {({ open }) => (
                            <>
                              <div>
                                <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-gray-800 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                  <span>{item.name}-Ed</span>
                                  {/* <ChevronDownIcon
                                      className="w-5 h-5 ml-2 -mr-1"
                                      aria-hidden="true"
                                    /> */}
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    className="w-5 h-5 ml-2 -mr-1" aria-hidden="true">
                                    <path
                                      d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" />
                                  </svg>
                                </Menu.Button>
                              </div>
                              <Transition
                                show={open}
                                as={React.Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                              >
                                <Menu.Items
                                  static
                                  className="origin-top-right relative mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                >
                                  <div className="py-1 bg-gray-300 right-10 ">
                                    {item.children.map((child) => (
                                      <Menu.Item key={child.name}>
                                        {({ active }) => (
                                          <Link
                                            href={child.href}
                                            className={classNames(
                                              active
                                                ? 'bg-gray-400 text-gray-800'
                                                : 'text-gray-800',
                                              'block px-4 py-2 text-sm'
                                            )}
                                          >
                                            {child.name}-Gar
                                          </Link>
                                        )}
                                      </Menu.Item>
                                    ))}
                                  </div>
                                </Menu.Items>
                              </Transition>
                            </>
                          )}
                        </Menu>
                      ) : (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-900 text-white'
                              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'px-3 py-2 rounded-md text-sm font-medium'
                          )}
                        >
                          {item.name}
                        </Link>
                      )
                    )}
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <Disclosure.Button
                  className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) =>
                item.children ? (
                  <Disclosure key={item.name} as="div" className="space-y-1">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full justify-between items-center text-gray-400 hover:text-white hover:bg-gray-700">
                          <span className="font-medium">{item.name}</span>
                          {/* <ChevronDownIcon
                              className={classNames(
                                open ? 'transform rotate-180' : '',
                                'h-5 w-5'
                              )}
                              aria-hidden="true"
                            /> */}
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            className={classNames(
                              open ? 'transform rotate-180' : '',
                              'h-5 w-5'
                            )} aria-hidden="true">
                            <path d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" />
                          </svg>

                        </Disclosure.Button>
                        <Disclosure.Panel className="space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

