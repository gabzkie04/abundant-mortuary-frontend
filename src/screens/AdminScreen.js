import React from 'react'
import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

function AdminScreen() {
    return (
        <div>
          <Navbar bg="info" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Abundant Mortuary</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <LinkContainer to='/agent'>
                        <Nav.Link href="#home">PROFILING</Nav.Link>
                    </LinkContainer>
                    <Nav.Link href="#link">AGENT</Nav.Link>
                    <Nav.Link href="#link">COLLECTOR</Nav.Link>
                    <Nav.Link href="#link">COLLECTION</Nav.Link>
                    <Nav.Link href="#link">REPORTS</Nav.Link>
                    <Nav.Link href="#link">ABOUT</Nav.Link>
                    <Nav.Link href="#link">LOGOUT</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    )
}

export default AdminScreen
