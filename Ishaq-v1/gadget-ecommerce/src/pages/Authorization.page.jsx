import React, { useEffect } from 'react'
import Authorization from '../components/Authorization/Authorization'
import Footer from '../components/Footer/Footer'
import MobileNavbar from '../components/Navbar/MobileNavbar'
import Navbar from '../components/Navbar/Navbar'

export default function AuthorizationPage({ login }) {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <Navbar />
            <MobileNavbar/>
            <div className='bg-secondary h-fit md:h-screen pt-24'>
                <div className=" relative w-full">
                    <Authorization login={login} />
                </div>
            </div>
            <Footer/>
        </>

    )
}
