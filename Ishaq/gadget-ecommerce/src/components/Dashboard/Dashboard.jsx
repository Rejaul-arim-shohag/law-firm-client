import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import MobileNavbar from '../Navbar/MobileNavbar'
import Navbar from '../Navbar/Navbar'
import DashSidebar from './DashSidebar'

import "./dashSidebar.css"
export default function Dashboard() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <DashSidebar />
            <section className="home-section pt-10 relative overflow-hidden min-h-screen">
                <Navbar />
                <MobileNavbar />
                <Outlet />
                <Footer />
            </section>

        </>
    )
}
