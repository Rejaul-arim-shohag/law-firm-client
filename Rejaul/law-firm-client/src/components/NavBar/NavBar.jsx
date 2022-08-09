import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useNavigate, NavLink } from 'react-router-dom';
import { AiOutlineCheckCircle, AiOutlineEdit, AiOutlineLogout, AiOutlineMenuUnfold, AiOutlineUser } from "react-icons/ai";
import logo from "../../Assets/images/logo2.svg"
import { getToken, getUserDetails, removeSession } from '../../Helper/SessionHelper';
import "./NavBar.css"
const NavBar = () => {
    let navigate = useNavigate()
    const [navbar, setNavbar] = useState(false);
    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }
    window.addEventListener("scroll", changeBackground)

    return (
        <div className={navbar ? "MainNavbar activeNav" : "MainNavbar"}>
            <Navbar className="mainNav mx-w-100  bg-transparent" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#home">
                        <img className="navLogo" src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link>
                                <Link to="/">Home</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/team">Team</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/contact-us">Contact</Link>
                            </Nav.Link>

                            {/* <Nav.Link href="#link">Pricing</Nav.Link> */}
                            <Nav.Link>
                                <Link to="/aboutUs">About</Link>
                            </Nav.Link>
                            <Nav.Link>
                                {getToken() ?
                                    <div className="float-right h-auto d-flex">
                                        <div className="user-dropdown">
                                            <img className="icon-nav-img icon-nav" src={getUserDetails()["photo"]} alt="" />
                                            <div className="user-dropdown-content ">
                                                <div className="mt-4 text-center">
                                                    {/* <img className="icon-nav-img" src={getUserDetails()["photo"]} alt="" /> */}
                                                    <h6>{getUserDetails()["fullName"]}</h6>
                                                    <hr className="user-dropdown-divider  p-0" />
                                                </div>
                                                <NavLink to="/Profile" className="side-bar-item">
                                                    <AiOutlineUser className="side-bar-item-icon" />
                                                    <span className="side-bar-item-caption">Profile</span>
                                                </NavLink>
                                                <a className="side-bar-item">
                                                    <AiOutlineLogout className="side-bar-item-icon" />
                                                    <span onClick={()=>removeSession()} className="side-bar-item-caption">Logout</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div> : <Link to="/login">Login</Link>}
                            </Nav.Link>

                            {/* <button onClick={handleNavigateToAppoinment} className="navigationBtn mainButton">Make an Appointment</button> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;