import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard() {
    return (
        <div>
            <div className="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md ">
                <img className="object-cover w-full h-36 md:h-64" src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Article" />

                <div className="p-2">
                    <div>
                        <Link to="#" className="block text-sm md:text-base no-underline font-semibold text-dark transition-colors duration-200 transform  hover:text-primary ">OnePlus 10 Pro Case Ultra Hybrid</Link>
                        <p className="mt-2 text-xs md:text-base text-primary font-bold">BDT.800</p>
                        <p className="mt-2 text-xs  font-bold"><span className='text-gray-400 line-through'>BDT.1000</span><span className='ml-2 text-dark'> -20%</span></p>
                    </div>


                </div>
            </div>
        </div>
    )
}
