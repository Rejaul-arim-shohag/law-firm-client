import React, { useEffect } from 'react'
import Footer from '../components/Footer/Footer'
import ContactUs from '../components/Miscellaneous/ContactUs'
import MobileNavbar from '../components/Navbar/MobileNavbar'
import Navbar from '../components/Navbar/Navbar'
import Reviews from '../components/Reviews/Reviews'

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Navbar />
      <MobileNavbar />
      <ContactUs />
      <Reviews />
      <Footer />
    </>

  )
}
