import React from 'react';
import { Link } from 'react-router-dom';
import {Container, Row, Col, InputGroup, Form, FormControl, Button} from 'react-bootstrap';



function Partners() {
  return (
        <>
            <section className="partners">
                <Container>
                    <Row>
                        <Col xs={12}>
                            <div className="content">
                                <h5>Partners</h5>
                                <ul className="partners-logo">
                                    <li><img src={require('../images/partner-logo-1.png')} /></li>
                                    <li><img src={require('../images/partner-logo-2.png')} /></li>
                                    <li><img src={require('../images/partner-logo-1.png')} /></li>
                                    <li><img src={require('../images/partner-logo-2.png')} /></li>
                                    <li><img src={require('../images/partner-logo-1.png')} /></li>
                                    <li><img src={require('../images/partner-logo-2.png')} /></li>
                                </ul>
                            </div>
                            <hr className="d-none d-md-block" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
  );
}

export default Partners;