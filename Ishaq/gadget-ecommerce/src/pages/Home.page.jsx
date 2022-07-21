import React, { useEffect } from 'react'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import HeroSection from '../components/HeroSection/HeroSection'
import MobileNavbar from '../components/Navbar/MobileNavbar'
import Navbar from '../components/Navbar/Navbar'
import ProductSlider from '../components/ProductSlider/ProductSlider'
import Reviews from '../components/Reviews/Reviews'
import ShopByBrands from '../components/ShopByBrands/ShopByBrands'

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='relative'>
      <Navbar />
      <MobileNavbar/>
      <HeroSection />
      <ShopByBrands/>
      <ProductSlider title="Top Selling"/>
      <ProductSlider title="New Arrival"/>
      <Reviews/>
      <Contact/>
      <Footer/>
    </div>
  )
}
