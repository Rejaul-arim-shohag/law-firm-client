import React, {Component} from 'react';

// React Bootstrap
import {Container, Nav, Navbar} from "react-bootstrap";

// React Router
import {Link} from "react-router-dom";

class AppNavbar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav className="ms-auto my-2 my-lg-0">
                                <Link className="nav-link active" to="/">Home</Link>
                                <Link className="nav-link" to="/about">About</Link>
                                <Link className="nav-link" to="/courses">Courses</Link>
                                <Link className="nav-link" to="/contact">Contact</Link>
                                <Link className="nav-link" to="/join">Join</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default AppNavbar;