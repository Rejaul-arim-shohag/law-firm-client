import React from 'react'
import DropDown from './DropDown'
import ProductCard from './ProductCard'

export default function ProductSlider() {
    return (
        <div className=''>
            <div className="relative container py-16 bg-[#F4F4F6] flex justify-center flex-col items-center">
                <div className="flex flex-col items-center justify-center">
                    <h3 className='font-extrabold md:text-3xl text-sm  text-dark bg-hero-vector flex justify-center items-center bg-contain bg-left bg-no-repeat  md:py-1 w-96 h-16 text-center'>
                       <span className='block'> Top Selling</span>
                        {/* <span className=' bg-hero-vector bg-contain  bg-no-repeat block absolute h-96 w-96 top-0 '></span> */}
                    </h3>
                    <DropDown />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-16 relative">
                    <div className=" bg-hero-spiral bg-no-repeat bg-contain absolute -top-[3%] -left-[15%] md:-top-1/4  md:-left-[5%]  w-1/2 h-1/2 md:w-full md:h-full"></div>
                    {
                        [...Array(5)].map((item, index) => {
                            return (
                                <ProductCard />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
