import React from 'react'
import { BsDot } from 'react-icons/bs'
import { paymentImgSrc } from '../Footer/PaymentImg'

export default function Specifications() {
    const data = [
        { title: "Display", des: "6.7 inches Super Retina XDR OLED, 120Hz" },
        { title: "Camera", des: "12 MP (wide)+ 12 MP (telephoto)+ 12 MP (ultrawide) | 12 MP (wide) Selfie" },
        // { title: "RAM", des: "8GB" },
        // { title: "ROM", des: "128GB" },
        { title: "Battery", des: "Li-Ion 4352 mAh (non-removable 16.75 Wh)" }
    ]
    return (
        <>
            <div className="bg-white dark:bg-gray-900 rounded-md shadow-md mt-16 md:mt-0">
                <div className="container px-6 py-8 mx-auto">
                    <div className="p-8 pt-2  space-y-2  dark:bg-gray-800 rounded-xl">
                        <div className="flex items-center justify-between  mb-10">
                            <h2 className="text-2xl font-semibold text-primary dark:text-primary sm:text-3xl">Tk. 13500<span className=" line-through ml-2 text-grey-400 font-semibold  md:text-sm text-xs">Tk. 15000</span></h2>
                            <div className="px-2 text-xs hidden md:block text-primary bg-gray-100 rounded-full dark:text-primary sm:px-4 sm:py-1 dark:bg-gray-700 ">
                                Save 10%
                            </div>
                        </div>
                        {
                            data?.map((item, index) => (
                                <div key={index} className="flex items-center border-b border-grey-300  justify-between text-gray-800 dark:text-gray-200">
                                    <p className="text-sm flex justify-center items-center"><BsDot className='text-primary text-3xl' /> <span>{item.title}</span></p>
                                    <p className='w-1/2 text-sm font-semibold'>{item.des}</p>
                                </div>
                            ))
                        }
                        <div className="grid grid-cols-2 gap-8">
                            <div className="relative">
                                <input className="hidden group peer" type="radio" name="shippingOption" value="standard_alt" id="standard_alt" />

                                <label className="block p-4 text-sm font-medium transition-colors border border-gray-100 rounded-lg shadow-sm cursor-pointer peer-checked:border-primary hover:bg-gray-50 peer-checked:ring-1 peer-checked:ring-primary" for="standard_alt">
                                    <span> RAM </span>

                                    <span className="block mt-1 text-xs text-gray-500">
                                        8GB
                                    </span>
                                </label>

                                <svg className="absolute w-5 h-5 text-primary opacity-0 top-4 right-4 peer-checked:opacity-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>
                            </div>

                            <div className="relative">
                                <input className="hidden group peer" type="radio" name="shippingOption" value="next_day_alt" id="next_day_alt" />

                                <label className="block p-4 text-sm font-medium transition-colors border border-gray-100 rounded-lg shadow-sm cursor-pointer peer-checked:border-primary hover:bg-gray-50 peer-checked:ring-1 peer-checked:ring-primary" for="next_day_alt">
                                    <span> RAM </span>

                                    <span className="block mt-1 text-xs text-gray-500">
                                        32GB
                                    </span>
                                </label>

                                <svg className="absolute w-5 h-5 text-primary opacity-0 top-4 right-4 peer-checked:opacity-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-8">
                            <div className="relative">
                                <input className="hidden group peer" type="radio" name="shippingOption" value="standard_alt" id="standard_alt" />

                                <label className="block p-4 text-sm font-medium transition-colors border border-gray-100 rounded-lg shadow-sm cursor-pointer peer-checked:border-primary hover:bg-gray-50 peer-checked:ring-1 peer-checked:ring-primary" for="standard_alt">
                                    <span> RAM </span>

                                    <span className="block mt-1 text-xs text-gray-500">
                                        8GB
                                    </span>
                                </label>

                                <svg className="absolute w-5 h-5 text-primary opacity-0 top-4 right-4 peer-checked:opacity-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>
                            </div>

                            <div className="relative">
                                <input className="hidden group peer" type="radio" name="shippingOption" value="next_day_alt" id="next_day_alt" />

                                <label className="block p-4 text-sm font-medium transition-colors border border-gray-100 rounded-lg shadow-sm cursor-pointer peer-checked:border-primary hover:bg-gray-50 peer-checked:ring-1 peer-checked:ring-primary" for="next_day_alt">
                                    <span> RAM </span>

                                    <span className="block mt-1 text-xs text-gray-500">
                                        32GB
                                    </span>
                                </label>

                                <svg className="absolute w-5 h-5 text-primary opacity-0 top-4 right-4 peer-checked:opacity-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center gap-2 mt-2">
                        <button className="px-8 py-2 tracking-wide text-white  md:w-1/3  transition-colors duration-200 transform bg-primary rounded-md  uppercase">
                            Add to Cart
                        </button>
                        <button className="px-8 py-2 tracking-wide text-white  md:w-1/3  transition-colors duration-200 transform bg-primary rounded-md  uppercase">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
