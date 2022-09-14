import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useNavigate, NavLink } from 'react-router-dom';
import logo from "../../Assets/images/lawyerLogo.png"
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
    const logoClickHandler=()=>{
        window.location.href="/"
    }
    return (
        <div className={navbar ? "MainNavbar activeNav" : "MainNavbar"}>
            <Navbar className="mainNav mx-w-100  bg-white" expand="lg">
                <Container>
                    <Navbar.Brand onClick={logoClickHandler}>
                        <img className="navLogo" src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link>
                                <Link to="/">HOME</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/team">TEAM</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/contact-us">CONTACT</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/aboutUs"> ABOUT</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/OurBlog">BLOG</Link>
                            </Nav.Link>
                            <Nav.Link to="/aboutUs">
                                <div className="d-flex">
                                    <button className="navbarButton cursor-alias">+8801650288673</button>
                                </div>
                            </Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;