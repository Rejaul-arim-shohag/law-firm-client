import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { Fragment } from 'react'
import { BsApple, BsHouse } from 'react-icons/bs'
import { GiSmartphone } from 'react-icons/gi'
import { SiSamsung, SiXiaomi } from 'react-icons/si'
import { Link } from 'react-router-dom'

const smartphones = [
  {
    name: 'Apple',
    to: '/',
    icon: <BsApple />,
  },
  {
    name: 'Xiaomi',
    to: '/',
    icon: <SiXiaomi />,
  },
  {
    name: 'Samsung',
    to: '/',
    icon: <SiSamsung />
  },
  {
    name: 'OPPO',
    to: '/',
    icon: <GiSmartphone />,
  },
  {
    name: 'Vivo',
    to: '/',
    icon: <GiSmartphone />,
  },
]

const menu = [
  {
    name: 'Home',
    to: '/',
    icon:  <BsHouse />,
  },
  {
    name: 'Smartphones',
    to: '/',
    icon:  <GiSmartphone />,
  },
  {
    name: 'Mobile Accessories',
    to: '/',
    icon:  <GiSmartphone />,
  },
  {
    name: 'About',
    to: '/',
    icon:  <GiSmartphone />,
  },
  {
    name: 'Contact',
    to: '/',
    icon:  <GiSmartphone />,
  },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Popover className="absolute top-0 right-0 left-0 z-50 container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center  py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/" className='bg-dark md:text-sm py-2 px-4 rounded-tr-2xl'>
              <span className='text-primary'>gadget</span>
              <br />
              <span className='text-white uppercase font-bold'>Shop <span className='bg-primary rounded-full h-1 w-1 inline-block'></span></span>

            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none  focus:ring-0">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-primary',
                      'group  rounded-md  inline-flex items-center text-base font-medium hover:text-primary focus:outline-none  focus:ring-0'
                    )}
                  >
                    <span>Smartphones</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-primary' : 'text-primary',
                        'ml-2 h-5 w-5 group-hover:text-primary'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-[13rem] sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {smartphones.map((item) => (
                            <Link
                              key={item.name}
                              to={item.to}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                            >
                              <p className='flex-shrink-0 h-6 w-6 text-primary'>{item.icon}</p>
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                              </div>
                            </Link>
                          ))}
                        </div>

                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <Link to="/" className="text-base font-medium text-dark hover:text-gray-400">
              Mobile Accessories
            </Link>
            <Link to="/" className="text-base font-medium text-dark hover:text-gray-400">
              About
            </Link>
            <Link to="/" className="text-base font-medium text-dark hover:text-gray-400">
              Contact
            </Link>


          </Popover.Group>

        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <Link to="/" className='bg-dark text-xs py-2 px-4 rounded-tr-2xl'>
                    {/* <span className='text-primary'>gadget </span> */}

                    <span className='text-white uppercase font-medium'>Shop <span className='bg-primary rounded-full h-1 w-1 inline-block'></span></span>

                  </Link>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none  focus:ring-0">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {
                    menu.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                      >
                        <p className='flex-shrink-0 h-6 w-6 text-primary'>{item.icon}</p>
                        {/* <item.icon className="flex-shrink-0 h-6 w-6 text-primary" aria-hidden="true" /> */}
                        <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                      </Link>
                    ))
                  }

                </nav>
              </div>
            </div>

          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
