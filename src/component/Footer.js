import React from 'react';
import { Link } from 'react-router-dom';
import {Container, Row, Col, InputGroup, Form, FormControl, Button} from 'react-bootstrap';
import { Bookmark } from 'react-feather';


function Footer(props) {
  return (
        <>
            <footer>
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12}><hr /></Col>
                        <Col xs={12} md={4}>
                            Logo
                        </Col>
                        <Col xs={12} md={8}>
                            <ul className="footer-links">
                                <li><Link to="/">Resources</Link></li>
                                <li><Link to="/">About us</Link></li>
                                <li><Link to="/">Contact us</Link></li>
                            </ul>
                        </Col>

                        <Col xs={12}><hr /></Col>
                    </Row>
                </Container>
            </footer>
        </>
  );
}

export default Footer;