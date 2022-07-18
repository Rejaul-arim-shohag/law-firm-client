import React from 'react'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { paymentImgSrc } from './PaymentImg'
export default function Footer() {
    return (
        <footer className=' bg-secondary'>
            <div className=" py-10 flex flex-col md:flex-row justify-between  container">
                <div className="aboutUs flex-1 p-10 pl-0">
                    <h3 className='text-2xl font-bold'>About Us</h3>
                    <p className='mt-5 text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque quam, dignissimos repellat optio quisquam dolores quis. Atque eos voluptatem harum?</p>
                    <div className="flex gap-3 mt-5">
                        <a href='/' target="_blank" className='block bg-white text-black rounded-full duration-200 hover:bg-primary hover:text-white p-3 text-xl'><BsFacebook className='' /></a>
                        <a href='/' target="_blank" className='block bg-white text-black rounded-full duration-200 hover:bg-primary hover:text-white p-3 text-xl'><BsTwitter className='' /></a>
                        <a href='/' target="_blank" className='block bg-white text-black rounded-full duration-200 hover:bg-primary hover:text-white p-3 text-xl'><BsInstagram className='' /></a>
                        <a href='/' target="_blank" className='block bg-white text-black rounded-full duration-200 hover:bg-primary hover:text-white p-3 text-xl'><BsLinkedin className='' /></a>
                    </div>

                </div>
                <div className="customerService flex-1 md:p-10 ">
                    <h3 className='text-2xl font-bold'>Customer Service</h3>
                    <div className="mt-5 flex flex-col gap-5 text-sm">
                        <Link to="/" className='hover:text-primary'>Terms & Conditions</Link>
                        <Link to="/" className='hover:text-primary'>Return Policy</Link>
                        <Link to="/" className='hover:text-primary'>Privacy Policy</Link>
                        <Link to="/" className='hover:text-primary'>Cookie Policy</Link>
                    </div>


                </div>
                <div className="contactUs flex-1 mt-10 md:mt-0 md:p-10 ">
                    <h3 className='text-2xl font-bold'>Contact Us</h3>
                    <p className='mt-5 text-sm block'>support@gadgetShop.com</p>
                    <iframe title='fbPage' className='mt-5' src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fweb.facebook.com%2FprogrammerRabbil&tabs=timeline&width=340&height=271&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1326338011183994" width="340" height="100" scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                </div>
            </div>
           <div className="border-t border-gray-200">
           <div className=" container py-5 flex flex-col gap-4 md:flex-row justify-between items-center">
                <p className='text-sm'>©2022 Rabbil Hasan - All right reserved </p>
                <div className="flex gap-4">
                    {paymentImgSrc.map((item, i) => (
                        <img key={i} src={item} alt="" className='w-10 md:w-16 h-auto' />

                    ))}
                </div>
            </div>
           </div>



        </footer>
    )
}
