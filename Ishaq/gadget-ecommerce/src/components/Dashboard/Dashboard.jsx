import React from 'react'
import { Outlet } from 'react-router-dom'
import DashSidebar from './DashSidebar'
import "./dashSidebar.css"
export default function Dashboard() {
    return (
        <>
            <DashSidebar />
            <section className="home-section pt-10">
                <Outlet/>
            </section>

        </>
    )
}
