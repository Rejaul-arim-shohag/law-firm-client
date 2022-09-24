import React, { useState } from 'react';
import { useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link, useNavigate, NavLink } from 'react-router-dom';
import { readAddress, readLogo } from '../../ApiRequest/APIRequest';
import "./NavBar.css"
const NavBar = () => {
    let navigate = useNavigate()
    const [navbar, setNavbar] = useState(false);
    const [logo, setLogo] = useState(false);
    useEffect(()=>{
        readAddress()
        readLogo().then((res) => {
            setLogo(res?.data)
        })
    }, [])
    const address = useSelector((state) => (state.address.addressList));

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
                        <img className="navLogo" src={logo[0]?.logo} alt="" />
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
                                    <button className="navbarButton cursor-alias">{address[0]?.address.phone}</button>
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