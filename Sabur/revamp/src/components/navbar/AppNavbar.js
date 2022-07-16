import React, {Component} from 'react';

// React Bootstrap
import {Container, Nav, Navbar, Offcanvas, NavDropdown, Form, Button} from "react-bootstrap";

// React Router
import {Link} from "react-router-dom";

// Style
import './AppNavbar.css';

class AppNavbar extends Component {
    render() {
        return (
            <div>
                {/*<Navbar bg="light" expand="lg">*/}
                {/*    <Container>*/}
                {/*        <Navbar.Brand href="#" className="bodyMedium fw-bold themeDarkBG">learnwith <br/> <span className="text-white small-dot">RABBIL</span></Navbar.Brand>*/}
                {/*        <Navbar.Toggle aria-controls="navbarScroll" />*/}
                {/*        <Navbar.Collapse id="navbarScroll">*/}
                {/*            <Nav className="ms-auto my-2 my-lg-0">*/}
                {/*                <Link className="nav-link text-uppercase fw-bold active" to="/">Home</Link>*/}
                {/*                <Link className="nav-link text-uppercase fw-bold" to="/about">About</Link>*/}
                {/*                <Link className="nav-link text-uppercase fw-bold" to="/courses">Courses</Link>*/}
                {/*                <Link className="nav-link text-uppercase fw-bold" to="/contact">Contact_Section</Link>*/}
                {/*                <Link className="nav-link text-uppercase fw-bold rounded-pill text-white themeBG py-2 px-4 ms-3" to="/join">Join</Link>*/}
                {/*            </Nav>*/}
                {/*        </Navbar.Collapse>*/}
                {/*    </Container>*/}
                {/*</Navbar>*/}
                {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => (
                    <Navbar key={"lg"} bg="light" expand={"lg"} className="">
                        <Container>
                            <Navbar.Brand href="#" className="bodyMedium fw-bold themeDarkBG">learnwith <br/> <span className="text-white small-dot">RABBIL</span></Navbar.Brand>
                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
                            <Navbar.Offcanvas
                                id={`offcanvasNavbar-expand-lg`}
                                aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                                placement="end"
                            >
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                                        Offcanvas
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Nav className="justify-content-end flex-grow-1 pe-3">
                                        <Link className="nav-link text-uppercase active" to="/">Home</Link>
                                        <Link className="nav-link text-uppercase" to="/about">About</Link>
                                        <Link className="nav-link text-uppercase" to="/courses">Courses</Link>
                                        <Link className="nav-link text-uppercase" to="/contact">Contact</Link>
                                        <Link className="nav-link text-uppercase rounded-pill text-white themeBG py-2 px-4 ms-md-3" to="/join">Join</Link>
                                    </Nav>
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>
                ))}
            </div>
        );
    }
}

export default AppNavbar;