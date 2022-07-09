import React from 'react'
import HeroSlider from './HeroSlider'
import RecentProducts from './RecentProducts'
import Stats from './Stats'

export default function HeroSection() {



  return (
    <div className='relative md:py-16 py-10 pt-24 md:pt-16 bg-gradient-to-r from-[#b0eacd8b]'>
      <div className="w-full hidden md:block   h-full absolute -top-64 md:top-0 left-0 bg-hero-wave bg-contain bg-left bg-no-repeat"></div>
      <div className="w-1/3 h-full hidden md:block absolute top-0 right-0 bg-secondary rounded-bl-[10rem]"></div>
      <div className="flex flex-col md:flex-row container justify-between md:pt-14">
        <div className="heroText md:w-1/2 p-5">
          <h2 className='flex flex-col gap-2'><span className='font-bold capitalize md:text-5xl text-2xl leading-snug'>Super High quality gadget shop in</span> <span className='font-extrabold md:text-5xl text-3xl uppercase text-primary bg-hero-vector bg-contain bg-left bg-no-repeat  md:py-2'><span>Bangladesh</span> <span className='text-dark'>.</span> </span> </h2>
          <p className='text-xs leading-loose my-3 tracking-wider text-dark'><span>Are you looking for a budget-friendly and best quality gadget?</span> <br /> <span>Don't worry we have everything you need?</span> </p>
          <div className="search relative my-5">
            <input type="text" placeholder='Search product' className='py-3 md:py-5 px-10 w-full md:w-10/12  rounded-full focus:outline-0 text-dark' />
            <button className='py-3 absolute px-3 md:right-[6.5rem] right-1  text-xs md:top-3 top-1 bg-primary text-white font-bold rounded-full hover:bg-[#21bf73c7] duration-150'>Search Product</button>
          </div>
          <Stats />
          <RecentProducts />

        </div>
        <div className="heroSlider md:w-1/2 p-5 ">
          <HeroSlider />
        </div>
      </div>
    </div>
  )
}
