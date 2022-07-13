import React from 'react'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
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
      <ProductSlider title="Top Selling"/>
      <ShopByBrands/>
      <ProductSlider title="New Arrival"/>
      <Reviews/>
      <Contact/>
      <Footer/>
    </div>
  )
}
