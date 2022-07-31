import React from 'react'
import Dashboard from '../components/Dashboard/Dashboard'
import Footer from '../components/Footer/Footer'
import MobileNavbar from '../components/Navbar/MobileNavbar'
import Navbar from '../components/Navbar/Navbar'

export default function DashboardPage() {
    return (
        <>
            <Navbar />
            <MobileNavbar />
            <Dashboard />
            <Footer />
        </>
    )
}
