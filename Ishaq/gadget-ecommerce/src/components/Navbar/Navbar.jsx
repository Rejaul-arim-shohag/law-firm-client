import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import 'animate.css'
import { Fragment, useState } from 'react'
import { BsApple, BsCameraFill, BsCart, BsFillPhoneFill, BsFillPlugFill, BsFillTabletFill, BsLaptopFill, BsPerson } from 'react-icons/bs'
import { GiSmartphone } from 'react-icons/gi'
import { SiSamsung, SiXiaomi } from 'react-icons/si'
import { Link } from 'react-router-dom'
import useScrollPosition from '../../hooks/useScrollPosition'
import CartSidebar from '../Cart/CartSidebar'
const smartphones = [
  {
    name: 'Apple',
    to: '/all',
    icon: <BsApple />,
  },
  {
    name: 'Xiaomi',
    to: '/all',
    icon: <SiXiaomi />,
  },
  {
    name: 'Samsung',
    to: '/all',
    icon: <SiSamsung />
  },
  {
    name: 'OPPO',
    to: '/all',
    icon: <GiSmartphone />,
  },
  {
    name: 'Vivo',
    to: '/all',
    icon: <GiSmartphone />,
  },
]



const catagories = [
  { title: "Phones", to: "/all", icon: <BsFillPhoneFill /> },
  { title: "Tablets", to: "/all", icon: <BsFillTabletFill /> },
  { title: "Accessories", to: "/all", icon: <BsFillPlugFill /> },
  { title: "Laptop", to: "/all", icon: <BsLaptopFill /> },
  { title: "Camera", to: "/all", icon: <BsCameraFill /> },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const scrollPosition = useScrollPosition();
  const [showCartSideBar, setShowCartSideBar] = useState(true)

  return (
    <div className="relative ">
      <Popover className={`md:fixed absolute ${scrollPosition > 0 ? "md:bg-white animate__animated animate__fadeInDown " : "animate__animated animate__fadeInUp"}  top-0 right-0 left-0 z-50 `}>
        <div className="container">
          <div className="max-w-7xl container mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center  py-6 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <Link to="/" className='bg-dark md:text-sm py-2 px-4 flex md:flex-col gap-2 md:gap-0 justify-center items-center rounded-tr-2xl'>
                  <span className='text-primary text-sm '>gadget</span>
                  <span className='text-white uppercase text-xs font-bold'>Shop <span className='bg-primary rounded-full h-1 w-1 inline-block'></span></span>

                </Link>
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
                        <span>All Categories</span>
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
                              {catagories.map((item, i) => (
                                <Link
                                  key={i}
                                  to={item.to}
                                  className="-m-3 p-3 flex items-center gap-2 rounded-lg hover:bg-primary hover:text-white"
                                >
                                  <p className='flex-shrink-0 '>{item.icon}</p>
                                  <p className="text-base font-medium text-gray-900">{item.title}</p>

                                </Link>
                              ))}

                            </div>

                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? 'text-gray-900' : 'text-primary',
                          'group  rounded-md  inline-flex items-center text-base font-medium hover:text-primary focus:outline-none  focus:ring-0'
                        )}
                      >
                        <span>Brands</span>
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
                                  className="-m-3 p-3 flex items-center gap-2 rounded-lg hover:bg-primary hover:text-white"
                                >
                                  <p className='flex-shrink-0  '>{item.icon}</p>
                                  <p className="text-base font-medium text-gray-900">{item.name}</p>

                                </Link>
                              ))}
                            </div>

                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>


                <Link to="/aboutUs" className="text-base font-medium text-dark hover:text-gray-400">
                  About
                </Link>
                <Link to="/contact" className="text-base font-medium text-dark hover:text-gray-400">
                  Contact
                </Link>

                <button  className="">
                  <strong className="inline-flex items-center  relative px-1 py-1 ">
                    <span className="w-5 h-5 text-white text-xs bg-primary flex items-center justify-center rounded-full absolute -top-2.5 -right-2.5">10</span>
                    <span className="text-dark  text-xl">
                      <BsCart />
                    </span>
                  </strong>

                </button>
                <Link to="/login" className=" text-base flex items-center gap-2 font-medium text-dark hover:text-gray-400">
                  <BsPerson className='text-xl' /> <span>My Account</span>
                </Link>


              </Popover.Group>

            </div>
          </div>

        
        </div>
      </Popover>
      {/* <CartSidebar show={showCartSideBar} setShowCartSideBar={setShowCartSideBar} /> */}
    
    </div>
  )
}
