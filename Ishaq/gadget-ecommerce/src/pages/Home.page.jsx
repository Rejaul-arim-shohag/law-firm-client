import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import Navbar from '../components/Navbar/Navbar'
import ProductSlider from '../components/ProductSlider/ProductSlider'
import ShopByBrands from '../components/ShopByBrands/ShopByBrands'

export default function Home() {
  return (
    <div className='relative'>
      <Navbar />
      <HeroSection />
      <ShopByBrands/>
      <ProductSlider/>
    </div>
  )
}
