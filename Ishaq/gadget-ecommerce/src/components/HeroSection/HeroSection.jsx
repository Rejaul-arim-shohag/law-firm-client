import React from 'react'
import HeroSlider from './HeroSlider'
import RecentProducts from './RecentProducts'
import Stats from './Stats'

export default function HeroSection() {

  return (
    <div className='flex container py-10 justify-between   bg-gradient-to-r from-[#b0eacdb6]'>
      <div className="heroText flex-1 p-16 ">
        <h2 className='flex flex-col gap-2'><span className='font-bold capitalize text-5xl leading-snug'>Super High quality gadget shop in</span> <span className='font-extrabold text-5xl uppercase text-primary bg-hero-wave bg-contain bg-left bg-no-repeat  py-2'><span>Bangladesh</span> <span className='text-dark'>.</span> </span> </h2>
        <p className='text-xs leading-loose my-3 tracking-wider text-dark'><span>Are you looking for a budget-friendly and best quality gadget?</span> <br /> <span>Don't worry we have everything you need?</span> </p>
        <div className="search relative my-5">
          <input type="text" placeholder='Search product' className='py-4 px-10 w-full rounded-full focus:outline-0 text-dark'/>
          <button className='py-3 absolute px-3 right-2 top-1 bg-primary text-white font-bold rounded-full hover:bg-[#21bf73c7] duration-150'>Search Product</button>
        </div>
        <Stats />
        <RecentProducts />

      </div>
      <div className="heroSlider flex-1 p-16 flex items-center justify-center">
        <HeroSlider />
      </div>
    </div>
  )
}
