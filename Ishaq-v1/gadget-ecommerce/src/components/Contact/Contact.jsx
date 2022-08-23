import React from 'react'
import { BsArrowRight, BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { GiEnvelope, GiPaperPlane, GiPhone } from 'react-icons/gi'
export default function Contact() {
    return (
        <div className="bg-light">
            <div className='container py-10 md:px-40 '>
                <div className="flex gap-5 flex-col md:flex-row">
                    <div className="contactForm w-full md:w-2/3">
                        <div className="md:w-10/12">
                            <div className="mb-5">
                                <h3 className='text-xl font-bold mb-3'>Send A Message</h3>
                                <p className='text-xs'>Feel free to contact us with any inquiry regarding products & services.</p>
                            </div>

                            <section className="w-full mx-auto ">
                                <div className="mt-6 ">
                                    <div className="items-center  md:flex md:gap-5">
                                        <div className="w-full ">
                                            <label className="block mb-2 text-sm font-medium text-gray-600 ">Name</label>

                                            <input className="block w-full px-4  py-2 text-gray-700 bg-white border  border-secondary  rounded-md focus:border-primary focus:ring-0  focus:outline-none" type="text" />
                                        </div>

                                        <div className="w-full  mt-4 md:mt-0">
                                            <label className="block mb-2 text-sm font-medium text-gray-600 ">Email address</label>

                                            <input className="block w-full px-4 py-2 text-gray-700 bg-white   border  border-secondary   rounded-md focus:border-primary focus:ring-0  focus:outline-none" type="email" />
                                        </div>
                                    </div>
                                    <div className="w-full mt-4">
                                        <label className="block  text-sm font-medium text-gray-600 mb-3">Message</label>
                                        <textarea className=" h-40 block w-full px-4 py-2 text-gray-700 bg-white  border  border-secondary   rounded-md focus:border-primary focus:ring-0  focus:outline-none"></textarea>
                                    </div>

                                    <div className="flex justify-left mt-6">
                                        <button className="px-4 py-4 uppercase text-white transition-colors rounded-md duration-200 flex items-center justify-center gap-3 transform bg-primary  hover:bg-gray-600 focus:outline-none focus:bg-gray-600 text-xs"><span>Send Message</span> <BsArrowRight /> </button>
                                    </div>
                                </div>
                            </section>
                        </div>

                    </div>
                    <div className="contactInfo w-full md:w-1/3 bg-primary text-white p-10 rounded-md">
                        <h2 className='text-2xl font-semibold'>Contact Info</h2>
                        <div className="">
                            <div className="flex gap-3 mt-2 h-15">
                                <div className=" w-1/4">
                                    <p className='p-2 m-2 w-14 h-14 rounded-full text-dark bg-white flex items-center justify-center text-3xl'> <GiPaperPlane className='  ' /></p>
                                </div>
                                <div className="w-3/4 flex flex-col justify-center text-sm">
                                    <p className='font-bold'>Location</p>
                                    <p className='text-gray-200'>Dhaka</p>
                                    <p className='text-gray-200'>Bangladesh</p>
                                </div>
                            </div>
                            <div className="flex gap-3 mt-2">
                                <div className=" w-1/4">
                                    <p className='p-2 m-2 w-14 h-14 rounded-full text-dark bg-white flex items-center justify-center text-3xl'> <GiEnvelope className='  ' /></p>
                                </div>
                                <div className="w-3/4 flex flex-col justify-center text-sm">
                                    <p className='font-bold'>Email</p>
                                    <p className='text-gray-200'>rabbil.hasan@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex gap-3 mt-2">
                                <div className=" w-1/4">
                                    <p className='p-2 m-2 w-14 h-14 rounded-full text-dark bg-white flex items-center justify-center text-3xl'> <GiPhone className='  ' /></p>
                                </div>
                                <div className="w-3/4 flex flex-col justify-center text-sm">
                                    <p className='font-bold'>Phone</p>
                                    <p className='text-gray-200'>28286723723767</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3">
                            <h4 className='text-xl font-semibold'>Follow Us</h4>
                            <div className="flex gap-3 mt-2">
                                <a href='/' target="_blank" className='block bg-emerald-400 rounded-full duration-200 hover:bg-dark p-3 text-xl'><BsFacebook className='' /></a>
                                <a href='/' target="_blank" className='block bg-emerald-400 rounded-full duration-200 hover:bg-dark p-3 text-xl'><BsTwitter className='' /></a>
                                <a href='/' target="_blank" className='block bg-emerald-400 rounded-full duration-200 hover:bg-dark p-3 text-xl'><BsInstagram className='' /></a>
                                <a href='/' target="_blank" className='block bg-emerald-400 rounded-full duration-200 hover:bg-dark p-3 text-xl'><BsLinkedin className='' /></a>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}
