import React, {Component} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";

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
                                <Nav.Link className="nav-link active" to="/">Home</Nav.Link>
                                <Nav.Link className="nav-link" to="/about">About</Nav.Link>
                                <Nav.Link className="nav-link" to="/courses">Courses</Nav.Link>
                                <Nav.Link className="nav-link" to="/contact">Contact</Nav.Link>
                                <Nav.Link className="nav-link" to="/join">Join</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default AppNavbar;