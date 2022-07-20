import { Checkbox, Button,Input} from '@material-tailwind/react';
import React from 'react';
import { BsApple, BsCamera, BsLaptop, BsPlug, BsSearch, BsTabletLandscape } from 'react-icons/bs';
import { GiVibratingSmartphone } from 'react-icons/gi';
import { SiAsus, SiDell, SiSamsung, SiXiaomi } from 'react-icons/si';
export default function SidebarFilter() {
    const brands = [
        {
            title: 'Apple',
            to: '/',
            quantity: 10,
            icon: <BsApple />,
        },
        {
            title: 'Xiaomi',
            to: '/',
            quantity: 10,
            icon: <SiXiaomi />,
        },
        {
            title: 'Samsung',
            to: '/',
            quantity: 10,
            icon: <SiSamsung />
        },
        {
            title: 'Asus',
            to: '/',
            quantity: 10,
            icon: <SiAsus />,
        },
        {
            title: 'Dell',
            to: '/',
            quantity: 10,
            icon: <SiDell />,
        },
    ]
    const catagories = [
        { title: "Phones", quantity: 10, to: "/", icon: <GiVibratingSmartphone /> },
        { title: "Tablets", quantity: 5, to: "/", icon: <BsTabletLandscape /> },
        { title: "Accessories", quantity: 100, to: "/", icon: <BsPlug /> },
        { title: "Laptop", quantity: 50, to: "/", icon: <BsLaptop /> },
        { title: "Camera", quantity: 15, to: "/", icon: <BsCamera /> },
    ]
    return (
        <div className="lg:sticky lg:top-4">
            <details
                
                className="overflow-hidden "
            >
                <summary className="flex items-center justify-between px-5 py-3 bg-grey-100 lg:hidden">
                    <span className="text-sm font-medium">
                        Product Filters
                    </span>

                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </summary>

                <form
                    action=""
                    className="border-t border-grey-500 lg:border-t-0"
                >
                    <div className="shadow-md  mb-10 bg-white py-5 px-5">
                        <div className="w-full">
                            <Input label="Search product" icon={<BsSearch />} color="teal" />
                        </div>

                    </div>
                    <div className='shadow-md  mb-10 bg-white py-5'>
                        <p className="block w-full px-5 py-2 text-lg  font-semibold ">
                            Catagories
                        </p>

                        <div className="px-5">
                            {
                                catagories?.map((item, i) => (
                                    <div className="flex items-center justify-between border-b border-grey-300">
                                        <div className="flex items-center">
                                            <Checkbox className='focus:ring-0 ' />
                                            <label
                                                for={item.title}
                                                className="ml-3 text-sm font-medium"
                                            >
                                                {item.title}
                                            </label>
                                        </div>
                                        <div className="">
                                            <span className='text-xs'>({item.quantity})</span>
                                        </div>
                                    </div>
                                ))
                            }


                            <div className="flex justify-end mt-2">
                                <Button variant="text" color='teal' className=''>Reset</Button>
                            </div>


                        </div>
                    </div>

                    <div className='shadow-md  mb-10 bg-white py-5'>
                        <p className="block w-full px-5 py-2 text-lg  font-semibold ">
                            Brands
                        </p>

                        <div className="px-5">
                            {
                                brands?.map((item, i) => (
                                    <div className="flex items-center justify-between border-b border-grey-300">
                                        <div className="flex items-center">
                                            <Checkbox className='focus:ring-0 ' />
                                            <label
                                                for={item.title}
                                                className="ml-3 text-sm font-medium"
                                            >
                                                {item.title}
                                            </label>
                                        </div>
                                        <div className="">
                                            <span className='text-xs'>({item.quantity})</span>
                                        </div>
                                    </div>
                                ))
                            }


                            <div className="flex justify-end mt-2">
                                <Button variant="text" color='teal' className=''>Reset</Button>
                            </div>


                        </div>
                    </div>


                </form>
            </details>
        </div>
    )
}
