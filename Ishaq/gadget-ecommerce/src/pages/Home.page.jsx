import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import Navbar from '../components/Navbar/Navbar'
import ProductSlider from '../components/ProductSlider/ProductSlider'
import Reviews from '../components/Reviews/Reviews'
import ShopByBrands from '../components/ShopByBrands/ShopByBrands'

export default function Home() {
  return (
    <div className='relative'>
      <Navbar />
      <HeroSection />
      <ShopByBrands/>
      <ProductSlider/>
      <Reviews/>
    </div>
  )
}
