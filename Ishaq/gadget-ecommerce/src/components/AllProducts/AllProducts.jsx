import { Option, Select } from '@material-tailwind/react'
import React from 'react'
import ProductCard from '../ProductSlider/ProductCard'
import Pagination from './Pagination'
import SidebarFilter from './SidebarFilter'
export default function AllProducts() {
    return (
        <>
            <section className='pt-5 md:pt-24 bg-light'>
                <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
                    <div
                        className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:items-start"
                    >
                        <SidebarFilter />

                        <div className="lg:col-span-3">
                            <div className="flex items-center  md:justify-end">
                               
                               

                                <div className="ml-4">
                                    <div className="w-72">
                                        <Select label="Products per page" color="teal">
                                            <Option >10 PER PAGE</Option>
                                            <Option>20 PER PAGE</Option>
                                            <Option>30 PER PAGE</Option>
                                            <Option>40 PER PAGE</Option>

                                        </Select>
                                    </div>
                                </div>

                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-5 mt-4 bg-gray-200 ">
                                {
                                    [...Array(12)].map((item, index) => {
                                        return (
                                            <ProductCard />
                                        )
                                    })
                                }

                            </div>
                            <Pagination/>
                        </div>
                    </div>
                </div>
            </section>

            {/* <script>
    window.addEventListener('resize', () => {
      const desktopScreen = window.innerWidth < 768

                document.querySelector('details').open = !desktopScreen
    })
            </script> */}
        </>
    )
}
