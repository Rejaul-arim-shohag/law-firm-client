import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import AdminNavbar from './DashDraft/AdminNavbar'
import HeaderStats from './DashDraft/HeaderStats'
import DashSidebar from './DashSidebar'

import "./dashSidebar.css"
export default function Dashboard() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <DashSidebar />
            <section className="home-section  relative overflow-hidden min-h-screen">
                <div className="relative  ">
                    <AdminNavbar />
                    {/* Header */}
                    <div className=" mx-auto w-full pt-10">
                        <Outlet />
                    </div>
                </div>

            </section>

        </>
    )
}
