import React from 'react'
import HeroSlider from './HeroSlider'
import RecentProducts from './RecentProducts'
import Stats from './Stats'

export default function HeroSection() {

  return (
    <div className='relative py-16 bg-gradient-to-r from-[#b0eacd8b]'>
      <div className="w-full  h-full absolute top-0 left-0 bg-hero-wave bg-contain bg-left bg-no-repeat"></div>
      <div className="w-1/3 h-full absolute top-0 right-0 bg-secondary rounded-bl-[10rem]"></div>
      <div className="flex container justify-between pt-14">
        <div className="heroText w-1/2 p-5">
          <h2 className='flex flex-col gap-2'><span className='font-bold capitalize text-5xl leading-snug'>Super High quality gadget shop in</span> <span className='font-extrabold text-5xl uppercase text-primary bg-hero-vector bg-contain bg-left bg-no-repeat  py-2'><span>Bangladesh</span> <span className='text-dark'>.</span> </span> </h2>
          <p className='text-xs leading-loose my-3 tracking-wider text-dark'><span>Are you looking for a budget-friendly and best quality gadget?</span> <br /> <span>Don't worry we have everything you need?</span> </p>
          <div className="search relative my-5">
            <input type="text" placeholder='Search product' className='py-5 px-10 w-10/12 rounded-full focus:outline-0 text-dark' />
            <button className='py-3 absolute px-3 right-[6.5rem] top-2 bg-primary text-white font-bold rounded-full hover:bg-[#21bf73c7] duration-150'>Search Product</button>
          </div>
          <Stats />
          <RecentProducts />

        </div>
        <div className="heroSlider w-1/2 p-5 ">
          <HeroSlider />
        </div>
      </div>
    </div>
  )
}
