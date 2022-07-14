import React from 'react'
import { BsDot } from 'react-icons/bs'
import { paymentImgSrc } from '../Footer/PaymentImg'

export default function Specifications() {
    const data = [
        { title: "Display", des: "6.7 inches Super Retina XDR OLED, 120Hz" },
        { title: "Camera", des: "12 MP (wide)+ 12 MP (telephoto)+ 12 MP (ultrawide) | 12 MP (wide) Selfie" },
        { title: "RAM", des: "8GB" },
        { title: "ROM", des: "128GB" },
        { title: "Battery", des: "Li-Ion 4352 mAh (non-removable 16.75 Wh)" }
    ]
    return (
        <>

            <div class="bg-white dark:bg-gray-900 rounded-md shadow-md mt-16 md:mt-0">
                <div class="container px-6 py-8 mx-auto">
                    <div class="p-8 pt-2  space-y-2  dark:bg-gray-800 rounded-xl">
                        <div class="flex items-center justify-between  mb-10">

                            <h2 class="text-2xl font-semibold text-primary dark:text-primary sm:text-3xl">Tk. 13500<span class="font-medium line-through ml-2 text-dark md:text-sm text-xs">Tk. 15000</span></h2>

                            <div class="px-2 text-xs hidden md:block text-primary bg-gray-100 rounded-full dark:text-primary sm:px-4 sm:py-1 dark:bg-gray-700 ">
                                Save 10%
                            </div>
                        </div>
                        {
                            data?.map((item, index) => (
                                <div key={index} class="flex items-center border-b-2 border-slate-200  justify-between text-gray-800 dark:text-gray-200">
                                    <p class="text-sm flex justify-center items-center"><BsDot className='text-primary text-3xl' /> <span>{item.title}</span></p>
                                    <p className='w-1/2 text-sm font-semibold'>{item.des}</p>
                                </div>
                            ))
                        }
                        <div className="flex justify-between mt-8">
                            <p className='text-sm font-semibold'>Payment</p>
                            <div className="flex gap-2">
                                {paymentImgSrc.map((item, i) => (
                                    <img key={i} src={item} alt="" className='w-5 md:w-8 h-auto' />

                                ))}
                            </div>
                        </div>

                    </div>

                    <div class="flex justify-center mt-2">
                        <button class="px-8 py-2 tracking-wide text-white  md:w-1/3  transition-colors duration-200 transform bg-primary rounded-md  uppercase">
                            Purchase
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
