import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard() {
    return (
        <div>
            <div className="max-w-sm mx-1 overflow-hidden bg-white rounded-lg shadow-md ">
                <img className="object-cover w-full h-36 md:h-64" src="/images/recent/4.jpg" alt="Article" />

                <div className="p-2">
                    <div>
                        <Link to="#" className="block text-sm md:text-base no-underline font-semibold text-dark transition-colors duration-200 transform  hover:text-primary ">OnePlus 10 Pro Case Ultra Hybrid</Link>
                        <p className="mt-2 text-xs md:text-base text-primary font-bold">BDT. 800</p>
                        <p className="mt-2 text-xs  font-bold"><span className='text-gray-400 line-through'>BDT.1000</span><span className='ml-2 text-dark'> -20%</span></p>
                    </div>


                </div>
            </div>
        </div>
    )
}
