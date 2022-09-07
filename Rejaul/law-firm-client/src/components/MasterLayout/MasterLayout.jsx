import React, { Fragment, useRef } from "react";
import { Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { IoIosPeople } from "react-icons/io";
import { GoLaw } from "react-icons/go";
import { FaPlaneArrival } from "react-icons/fa";
import { RiTornadoLine } from "react-icons/ri";
import { FaGitter } from "react-icons/fa";
import { AiOutlineEdit, AiOutlineLogout, AiOutlineMenuUnfold, AiOutlineUser } from "react-icons/ai";
import logo from "../../Assets/images/logo2.svg";
import { RiDashboardLine } from "react-icons/ri";
import { removeSession } from "../../Helper/SessionHelper";
const MasterLayout = (props) => {
    let contentRef, sideNavRef = useRef();
    const onLogout = () => {
        removeSession()
    }
    const MenuBarClickHandler = () => {
        let sideNav = sideNavRef;
        let content = contentRef;
        if (sideNav.classList.contains("side-nav-open")) {
            sideNav.classList.add("side-nav-close");
            sideNav.classList.remove("side-nav-open");
            content.classList.add("content-expand");
            content.classList.remove("content");
        } else {
            sideNav.classList.remove("side-nav-close");
            sideNav.classList.add("side-nav-open");
            content.classList.remove("content-expand");
            content.classList.add("content");
        }
    };

    return (
        <Fragment>
            <Navbar className="fixed-top px-0 shadow-sm dashboard_nav">
                <Container fluid={true}>
                    <Navbar.Brand >
                        <a className="icon-nav m-0 h5 mr-5" onClick={MenuBarClickHandler}>
                            <AiOutlineMenuUnfold />
                        </a>
                        {/* <img className="nav-logo mx-2 " src={logo} alt="logo" /> */}
                    </Navbar.Brand>

                    <div className="float-right h-auto d-flex">
                        <div className="user-dropdown">
                            <img className="icon-nav-img icon-nav" src={logo} alt="" />
                            <div className="user-dropdown-content ">
                                <div className="mt-4 text-center">
                                    {/* <img className="icon-nav-img" src={getUserDetails()["photo"]} alt="" /> */}
                                    <h6>Rejaul karim</h6>
                                    <hr className="user-dropdown-divider  p-0" />
                                </div>
                                <NavLink to="/Profile" className="side-bar-item">
                                    <AiOutlineUser className="side-bar-item-icon" />
                                    <span className="side-bar-item-caption">Profile</span>
                                </NavLink>
                                <a onClick={onLogout} className="side-bar-item">
                                    <AiOutlineLogout className="side-bar-item-icon" />
                                    <span className="side-bar-item-caption">Logout</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </Container>
            </Navbar>
            <div ref={(div) => { sideNavRef = div }} className="side-nav-open">

                <NavLink className={(navData) => navData.isActive ? "side-bar-item-active side-bar-item mt-2" : "side-bar-item mt-2"} to="/adminDashboard" end>
                    <RiDashboardLine className="side-bar-item-icon" />
                    <span className="side-bar-item-caption">Dashboard</span>
                </NavLink>
                
                <NavLink className={(navData) => navData.isActive ? "side-bar-item-active side-bar-item mt-2" : "side-bar-item mt-2"} to="/AllAttorney" >
                    <IoIosPeople className="side-bar-item-icon" />
                    <span className="side-bar-item-caption">Attorney List</span>
                </NavLink>
               

                <NavLink className={(navData) => navData.isActive ? "side-bar-item-active side-bar-item mt-2" : "side-bar-item mt-2"} to="/Services-list" >
                    < GoLaw className="side-bar-item-icon" />
                    <span className="side-bar-item-caption">Services List</span>
                </NavLink>
                <NavLink className={(navData) => navData.isActive ? "side-bar-item-active side-bar-item mt-2" : "side-bar-item mt-2"} to="/blogList">
                    < GoLaw className="side-bar-item-icon" />
                    <span className="side-bar-item-caption">Blogs</span>
                </NavLink>
                
                <NavLink className={(navData) => navData.isActive ? "side-bar-item-active side-bar-item mt-2" : "side-bar-item mt-2"} to="/our-plans" >
                    <RiTornadoLine className="side-bar-item-icon" />
                    <span className="side-bar-item-caption">Plans List</span>
                </NavLink>

                <NavLink className={(navData) => navData.isActive ? "side-bar-item-active side-bar-item mt-2" : "side-bar-item mt-2"} to="/whyChoiceUsList" >
                    <RiTornadoLine className="side-bar-item-icon" />
                    <span className="side-bar-item-caption">Chooice Us List</span>
                </NavLink>

                <NavLink className={(navData) => navData.isActive ? "side-bar-item-active side-bar-item mt-2" : "side-bar-item mt-2"} to="/client-reviews" >
                    <FaGitter className="side-bar-item-icon" />
                    <span className="side-bar-item-caption">Reviews</span>
                </NavLink>
                <NavLink className={(navData) => navData.isActive ? "side-bar-item-active side-bar-item mt-2" : "side-bar-item mt-2"} to="/Utilities" >
                    <FaGitter className="side-bar-item-icon" />
                    <span className="side-bar-item-caption">Utilities</span>
                </NavLink>
            </div>

            <div ref={(div) => contentRef = div} className="content">
                {props.children}
            </div>

        </Fragment>
    );
};

export default MasterLayout;