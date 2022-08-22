import React, { useEffect } from 'react'
import AllProducts from '../components/AllProducts/AllProducts'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import MobileNavbar from '../components/Navbar/MobileNavbar'
import Navbar from '../components/Navbar/Navbar'
import Reviews from '../components/Reviews/Reviews'

export default function AllProductsPage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <Navbar />
            <MobileNavbar />
            <AllProducts />
            <Reviews />
            <Contact />
            <Footer />
        </div>
    )
}
