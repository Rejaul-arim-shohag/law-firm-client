import React, { useEffect } from 'react'
import AboutUs from '../components/AboutContact/AboutUs'
import Footer from '../components/Footer/Footer'
import MobileNavbar from '../components/Navbar/MobileNavbar'
import Navbar from '../components/Navbar/Navbar'
import Reviews from '../components/Reviews/Reviews'

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Navbar />
      <MobileNavbar />
      <AboutUs />
      <Reviews />
      <Footer />

    </>

  )
}

