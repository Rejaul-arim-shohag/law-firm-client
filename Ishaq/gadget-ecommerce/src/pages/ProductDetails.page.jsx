import React from 'react'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import ProductDetails from '../components/ProductDetails/ProductDetails'
import ProductSlider from '../components/ProductSlider/ProductSlider'
import Reviews from '../components/Reviews/Reviews'

export default function ProductDetailsPage() {

    return (
        <div>
            <Navbar />
            <ProductDetails />
            <ProductSlider title="Related Products" />
            <Reviews />
            <Contact />
            <Footer />

        </div>
    )
}
