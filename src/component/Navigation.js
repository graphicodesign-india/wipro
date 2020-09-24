import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {Container, Navbar, Nav, NavDropdown,Row, Col,InputGroup, FormControl, Button} from 'react-bootstrap';
import { Search } from 'react-feather';


function Navigation() {
  const [searchBox, setSearchBox] = useState(false);
  const [overlay, setOverlay] = useState(false);
  function toggleSearch () {
    if(!searchBox) setSearchBox(true);
    else setSearchBox(false);
    }
    function toggleOverlay () {
      if(!overlay) setOverlay(true);
      else setOverlay(false);
      }
  return (
        <>
        { overlay == true &&
            <div style={{position:"fixed",width:"100%",height:"100%",zIndex:1,top:0,left:0,background:"rgba(0,0,0,0.7)"}}></div>
        }
            <Navbar bg="white" expand="lg" className="navigation">
                <Navbar.Brand><Link to="/"><img className="logo" src={require('../images/logo.png')}></img></Link></Navbar.Brand>
                <Button onClick={toggleSearch} variant="link" className="ml-auto d-block d-md-none navbar-search"><Search /></Button>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleOverlay} />
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
            { searchBox == true &&
                <section className="hero searchbox">
                <Container>
                    <Row>
                        <Col xs={12}>
                            <InputGroup className="search-box mb-3">
                                <InputGroup.Prepend>
                                <InputGroup.Text id="search"><Search /></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                placeholder="Search for Covid Resources: Articles, blogs, ..."
                                aria-label="Search"
                                aria-describedby="Search for Covid Resources: Articles, blogs, ..."
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                </Container>
            </section>
            }

        </>
  );
}

export default Navigation;