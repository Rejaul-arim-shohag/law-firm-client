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
            <div className="bg-white dark:bg-gray-900 rounded-md shadow-md mt-10 md:mt-0">
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
                        <div className="flex items-center border-b border-grey-300  justify-between text-gray-800 dark:text-gray-200">
                            <p className="text-sm flex justify-center items-center"><BsDot className='text-primary text-3xl' /> <span>Memory</span></p>
                            <div className="w-1/2 mb-2 text-center">
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="relative shadow-lg border-secondary border">
                                        <input className="hidden group peer" type="radio" name="shippingOption" value="standard_alt" id="ram_one" />

                                        <label className="flex justify-center p-2 text-sm font-medium transition-colors text-center shadow-sm cursor-pointer peer-checked:border-primary border-4 border-transparent hover:bg-grey-50 " for="ram_one">
                                            <span>8GB</span>
                                        </label>


                                    </div>

                                    <div className="relative shadow-lg border-secondary border">
                                        <input className="hidden group peer" type="radio" name="shippingOption" value="next_day_alt" id="ram_two" />

                                        <label className="flex justify-center p-2 text-sm font-medium transition-colors text-center shadow-sm cursor-pointer peer-checked:border-primary border-4 border-transparent hover:bg-grey-50 " for="ram_two">
                                            <span>32GB</span>
                                        </label>


                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center border-b border-grey-300  justify-between text-gray-800 dark:text-gray-200">
                            <p className="text-sm flex justify-center items-center"><BsDot className='text-primary text-3xl' /> <span>Color</span></p>
                            <div className="w-1/2 mb-2 text-center">
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="relative shadow-lg  bg-grey-600">
                                        <input className="hidden group peer" type="radio" name="shippingOption" value="color_one" id="color_one" />

                                        <label className="block p-4 text-sm font-medium transition-colors  shadow-sm cursor-pointer peer-checked:border-primary border-4 border-transparent" for="color_one">
                                        </label>
                                    </div>

                                    <div className="relative shadow-lg  bg-dark">
                                        <input className="hidden group peer" type="radio" name="shippingOption" value="color_two" id="color_two" />

                                        <label className="block p-4 text-sm font-medium transition-colors   shadow-sm cursor-pointer peer-checked:border-primary border-4 border-transparent" for="color_two">
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="flex justify-center gap-2 mt-2">
                        <button className="px-3 py-2 text-xs tracking-wide text-white  md:w-1/3  transition-colors duration-200 transform bg-primary rounded-md  uppercase">
                            Add to Cart
                        </button>
                        <button className="px-3 py-2 text-xs  tracking-wide text-white  md:w-1/3  transition-colors duration-200 transform bg-primary rounded-md  uppercase">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
