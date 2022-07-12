import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from "../../Assets/images/logo2.svg"
import "./NavBar.css"
const NavBar = () => {
    return (
        <Navbar className="mainNav bg-transparent" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img className="navLogo" src={logo} alt="" />
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Contact</Nav.Link>
                        <Nav.Link href="#home">Success</Nav.Link>
                        <Nav.Link href="#link">Pricing</Nav.Link>
                        <Nav.Link href="#link">About</Nav.Link>
                        <button className="ml-5 mainButton">Join Now</button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;