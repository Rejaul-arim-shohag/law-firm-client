import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import MobileNavbar from '../components/Navbar/MobileNavbar'
import Navbar from '../components/Navbar/Navbar'

export default function UtilitiesPage() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
      <Navbar />
      <MobileNavbar />
      <Outlet />
      <Footer />
    </>
  )
}
