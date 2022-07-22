import React, { useState } from 'react';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../../Assets/images/logo2.svg"
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
    const handleNavigateToAppoinment=()=>{
        navigate("/appointment")
    }
    return (
        <div className={navbar ? "MainNavbar activeNav" : "MainNavbar"}>
            <Navbar className="mainNav mx-w-100  bg-transparent" expand="lg">
                <Container>
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

                            <button onClick={handleNavigateToAppoinment} className="navigationBtn mainButton">Make an Appointment</button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;