import React from 'react';
//import { IconContext } from 'react-icons/lib'
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../Navbar/Navbar.css'

const logo = require('../Assets/img/icon-BLACK.png')

export const NavBar = () => {

    
    return (
    <>
        {[ 'md' ].map((expand) => (
            <Navbar key={expand} bg="primary" expand={expand} sticky="top">
                <Container fluid>
                    <Navbar.Brand href="#">
                        <img
                            src={logo}
                            width="100"
                            height="100"
                            className="d-inline-block align-top"
                            alt="Flicks and Food logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                    <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                            Flicks and Food
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="#action1" className='link'>Home</Nav.Link>
                                <Nav.Link href="#action2" className='link'>Get Started</Nav.Link>
                                <Nav.Link href="#action2" className='link'>Login/Signup</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        ))}
    </>    
    );
};