import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { Fragment } from 'react'
import { BsCameraFill, BsFillPhoneFill, BsFillPlugFill, BsFillTabletFill, BsLaptopFill } from 'react-icons/bs'

export default function DropDown() {
    const catagories = [
        { title: "Phones", icon: <BsFillPhoneFill /> },
        { title: "Tablets", icon: <BsFillTabletFill /> },
        { title: "Accessories", icon: <BsFillPlugFill /> },
        { title: "Laptop", icon: <BsLaptopFill /> },
        { title: "Camera", icon: <BsCameraFill /> },
    ]
    return (
        <div className="relative w-56 text-center  z-10">
            <Menu as="div" className="relative inline-block text-center">
                <Menu.Button className="inline-flex w-full justify-center items-center rounded-md bg-opacity-0  px-4 py-2 text-base font-medium text-primary hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    All Categories
                    <ChevronDownIcon
                        className="ml-2 -mr-1 h-5 w-5 text-primary"
                        aria-hidden="true"
                    />
                </Menu.Button>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-1 py-1 ">
                            {
                                catagories?.map((item, idx) => (
                                    <Menu.Item key={idx}>
                                        {({ active }) => (
                                            <button
                                                className={`${active ? 'bg-primary text-white' : 'text-gray-900'
                                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                            >
                                                <span className='mr-2 h-5 w-5'>{item.icon}</span>

                                                {item.title}
                                            </button>
                                        )}
                                    </Menu.Item>
                                ))
                            }

                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}


