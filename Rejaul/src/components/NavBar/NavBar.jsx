import React, { useState } from 'react';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../../Assets/images/logo2.svg"
import "./NavBar.css"
const NavBar = () => {
    const [navbar, setNavbar] = useState(false);
    const changeBackground = () => {
        if(window.scrollY>=80){
            setNavbar(true)
        } else{
            setNavbar(false)
        }
        console.log(window.scrollY)
    }
    window.addEventListener("scroll", changeBackground)
    return (
        <div className={navbar?"MainNavbar activeNav":"MainNavbar"}>
            <Navbar className="mainNav mx-w-100  bg-transparent" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img className="navLogo" src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Contact</Nav.Link>
                            <Nav.Link href="#home">Success</Nav.Link>
                            <Nav.Link href="#link">Pricing</Nav.Link>
                            <Nav.Link href="#link">About</Nav.Link>
                            <button className="navigationBtn mainButton">Join Now</button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;