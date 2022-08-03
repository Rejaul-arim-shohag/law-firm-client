import React, { useState } from 'react'
import { NavLink } from "react-router-dom"

export default function DashSidebar() {
    const [toggleSidebar, setToggleSidebar] = useState(true);
    let inActiveClassName = "linkInactive";
    let activeClassName = "linkActive";
  
    return (
        <div className={`sidebar ${toggleSidebar ? "open" : ""}`}>
            <div className="logo-details">
                <i className='bx bxs-devices icon'></i>
                <div className="logo_name">gadget shop</div>
                <i className={`bx  ${toggleSidebar ? "bx-menu-alt-right" : "bx-menu"}`} id="btn" onClick={() => setToggleSidebar(s => !s)}></i>
            </div>
            <nav>
                <ul className="nav-list">

                    <li>
                        <NavLink to="/dashboard/dashHome" className={({ isActive }) =>
                            isActive ? activeClassName : inActiveClassName
                        } >
                            <i className='bx bx-grid-alt'></i>
                            <span className="links_name">Dashboard</span>
                        </NavLink>
                        <span className="tooltip">Dashboard</span>
                    </li>
                    <li>
                        <NavLink to="/dashboard/analytics" className={({ isActive }) =>
                            isActive ? activeClassName : inActiveClassName
                        }>
                            <i className='bx bx-pie-chart-alt-2' ></i>
                            <span className="links_name">Analytics</span>
                        </NavLink>
                        <span className="tooltip">Analytics</span>
                    </li>
                    <li>
                        <NavLink to="/dashboard/stock" className={({ isActive }) =>
                            isActive ? activeClassName : inActiveClassName
                        }>
                            <i className='bx bx-store-alt'></i>
                            <span className="links_name">Stock</span>
                        </NavLink>
                        <span className="tooltip">Stock</span>
                    </li>
                    <hr className='hr' />
                    <li>
                        <NavLink to="/dashboard/brand" className={({ isActive }) =>
                            isActive ? activeClassName : inActiveClassName
                        }>
                            <i className='bx bx-bookmarks'></i>
                            <span className="links_name">Brand</span>
                        </NavLink>
                        <span className="tooltip">Brand</span>
                    </li>

                    <li>
                        <NavLink to="/dashboard/category" className={({ isActive }) =>
                            isActive ? activeClassName : inActiveClassName
                        }>
                            <i className='bx bx-folder' ></i>
                            <span className="links_name">Category</span>
                        </NavLink>
                        <span className="tooltip">Category</span>
                    </li>
                    <li>
                        <NavLink to="/dashboard/product" className={({ isActive }) =>
                            isActive ? activeClassName : inActiveClassName
                        }>
                            <i className='bx bxs-grid'></i>
                            <span className="links_name">Product</span>
                        </NavLink>
                        <span className="tooltip">Product</span>
                    </li>
                    <hr className='hr' />
                    <li>
                        <NavLink to="/dashboard/customer" className={({ isActive }) =>
                            isActive ? activeClassName : inActiveClassName
                        }>
                            <i className='bx bx-group'></i>
                            <span className="links_name">Customer</span>
                        </NavLink>
                        <span className="tooltip">Customer</span>
                    </li>
                    <li>
                        <NavLink to="/dashboard/supplier" className={({ isActive }) =>
                            isActive ? activeClassName : inActiveClassName
                        }>
                            <i className='bx bxs-truck'></i>
                            <span className="links_name">Supplier</span>
                        </NavLink>
                        <span className="tooltip">Supplier</span>
                    </li>
                    <hr className='hr' />
                    <li>
                        <NavLink to="/dashboard/purchase" className={({ isActive }) =>
                            isActive ? activeClassName : inActiveClassName
                        }>
                            <i className='bx bx-shopping-bag' ></i>
                            <span className="links_name">Purchase</span>
                        </NavLink>
                        <span className="tooltip">Purchase</span>
                    </li>

                    <hr className='hr' />
                    <li>
                        <NavLink to="/dashboard/expense-type" className={({ isActive }) =>
                            isActive ? activeClassName : inActiveClassName
                        }>
                            <i className='bx bx-trending-down' ></i>
                            <span className="links_name">Expense Type</span>
                        </NavLink>
                        <span className="tooltip">Expense Type</span>
                    </li>
                    <li>
                        <NavLink to="/dashboard/expense" className={({ isActive }) =>
                            isActive ? activeClassName : inActiveClassName
                        }>
                            <i className='bx bx-money' ></i>
                            <span className="links_name">Expense</span>
                        </NavLink>
                        <span className="tooltip">Expense</span>
                    </li>
                    <hr className='hr' />
                    <li>
                        <NavLink to="/dashboard/sell" className={({ isActive }) =>
                            isActive ? activeClassName : inActiveClassName
                        }>
                            <i className='bx bx-cart' ></i>
                            <span className="links_name">Sell</span>
                        </NavLink>
                        <span className="tooltip">Sell</span>
                    </li>
                    <li>
                        <NavLink to="/dashboard/return" className={({ isActive }) =>
                            isActive ? activeClassName : inActiveClassName
                        }>
                            <i className='bx bx-log-out-circle' ></i>
                            <span className="links_name">Return</span>
                        </NavLink>
                        <span className="tooltip">Return</span>
                    </li>


                </ul>
            </nav>
        </div>
    )
}
