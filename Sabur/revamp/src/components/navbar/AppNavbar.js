import React, {Component} from 'react';

// React Bootstrap
import {Container, Nav, Navbar, Offcanvas} from "react-bootstrap";

// React Router
import {Link} from "react-router-dom";

// Style
import './AppNavbar.css';

class AppNavbar extends Component {
    render() {
        return (
            <div>
                {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map(() => (
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
                                        <Link className="nav-link text-uppercase" to="/mentor">Mentor</Link>
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