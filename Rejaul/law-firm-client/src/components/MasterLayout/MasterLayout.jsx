import React, { Fragment, useRef } from "react";
import { Container, Navbar } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { IoIosPeople } from "react-icons/io";
import { GoLaw } from "react-icons/go";
import { FaPlaneArrival } from "react-icons/fa";
import { RiTornadoLine } from "react-icons/ri";
import { FaGitter } from "react-icons/fa";
import { AiOutlineEdit, AiOutlineLogout, AiOutlineMenuUnfold, AiOutlineUser } from "react-icons/ai";
import { BsCalendarWeek } from "react-icons/bs";
import user from "../../Assets/images/user.png";
import logo from "../../Assets/images/lawyerLogo.png";
import { RiDashboardLine } from "react-icons/ri";
import { getAdminDetails, removeSession } from "../../Helper/SessionHelper";
import Dropdown from 'react-bootstrap/Dropdown';
import { getUserDetails } from "../../Helper/SessionHelper"
const MasterLayout = (props) => {
    let navigate = useNavigate()
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
                        <img className="nav-logo mx-3 " src={logo} alt="logo" />
                    </Navbar.Brand>

                    <div className="float-right h-auto d-flex mr-3">
                        <Dropdown align="end">
                            <Dropdown.Toggle id="dropdown-menu-align-end" variant="none">
                                <img className="icon-nav-img" src={getAdminDetails().photo} alt="" />
                            </Dropdown.Toggle>
                            <Dropdown.Menu  >
                                <Dropdown.Item onClick={() => navigate("/adminProfile")}>Profile</Dropdown.Item>
                                <Dropdown.Item onClick={onLogout}>Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                    </div>
                </Container>
            </Navbar>
            <div ref={(div) => { sideNavRef = div }} className="side-nav-open">

                <NavLink className={(navData) => navData.isActive ? "side-bar-item-active side-bar-item mt-2" : "side-bar-item mt-2"} to="/adminDashboard" end>
                    <RiDashboardLine className="side-bar-item-icon" />
                    <span className="side-bar-item-caption">Dashboard</span>
                </NavLink>

                <NavLink className={(navData) => navData.isActive ? "side-bar-item-active side-bar-item mt-2" : "side-bar-item mt-2"} to="/AppointmentList" >
                    <BsCalendarWeek className="side-bar-item-icon" />
                    <span className="side-bar-item-caption">Appointments</span>
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
                <NavLink className={(navData) => navData.isActive ? "side-bar-item-active side-bar-item mt-2" : "side-bar-item mt-2"} to="/readTermsAndCondition" >
                    <FaGitter className="side-bar-item-icon" />
                    <span className="side-bar-item-caption">Terms&Condition</span>
                </NavLink>
                <NavLink className={(navData) => navData.isActive ? "side-bar-item-active side-bar-item mt-2" : "side-bar-item mt-2"} to="/OurPrivacy" >
                    <FaGitter className="side-bar-item-icon" />
                    <span className="side-bar-item-caption">Privacy&Policy</span>
                </NavLink>
                <NavLink className={(navData) => navData.isActive ? "side-bar-item-active side-bar-item mt-2" : "side-bar-item mt-2"} to="/allSettings" >
                    <FaGitter className="side-bar-item-icon" />
                    <span className="side-bar-item-caption">Settings</span>
                </NavLink>
                
            </div>

            <div ref={(div) => contentRef = div} className="content">
                {props.children}
            </div>

        </Fragment>
    );
};

export default MasterLayout;