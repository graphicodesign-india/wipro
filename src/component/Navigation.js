import React from 'react';
import { Link } from 'react-router-dom';
import {Container, Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';



function Navigation() {
  return (
        <>
            <Navbar bg="white" expand="lg" className="navigation">
                <Navbar.Brand><Link to="/"><img className="logo" src={require('../images/logo.png')}></img></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto navilinks">
                        <NavDropdown title="Resources" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#home">About us</Nav.Link>
                        <Nav.Link href="#link">Contact us</Nav.Link>
                        <Nav.Link href='/login' className="btn btn-primary">Sign In</Nav.Link>
                    </Nav>
            </Navbar.Collapse>
            </Navbar>
        </>
  );
}

export default Navigation;