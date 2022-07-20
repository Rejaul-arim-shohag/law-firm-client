import React, { useEffect } from 'react'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import MobileNavbar from '../components/Navbar/MobileNavbar'
import Navbar from '../components/Navbar/Navbar'
import ProductDetails from '../components/ProductDetails/ProductDetails'
import ProductSlider from '../components/ProductSlider/ProductSlider'
import Reviews from '../components/Reviews/Reviews'

export default function ProductDetailsPage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <Navbar />
            <MobileNavbar/>
            <ProductDetails />
            <ProductSlider title="Related Products" />
            <Reviews />
            <Contact />
            <Footer />

        </div>
    )
}
