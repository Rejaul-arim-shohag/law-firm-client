import React, { useEffect } from 'react'
import Footer from '../components/Footer/Footer'
import MobileNavbar from '../components/Navbar/MobileNavbar'
import Navbar from '../components/Navbar/Navbar'

export default function ComingSoonPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Navbar />
      <MobileNavbar />
      <div className='bg-light h-screen flex items-center justify-center'>
        <h3 className='font-extrabold md:text-3xl text-xl  text-dark bg-hero-vector flex justify-center items-center bg-contain bg-left bg-no-repeat  md:py-1 md:w-96 w-52 md:h-16 h-8 text-center'>
          Coming Soon
        </h3>

      </div >
      <Footer />
    </>
  )
}
