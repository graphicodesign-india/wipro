import React from 'react';
import { Link } from 'react-router-dom';
import {Container, Row, Col, InputGroup, Form, FormControl, Button} from 'react-bootstrap';
import { Search } from 'react-feather';



function Hero() {
  return (
        <>
            <section className="hero">
                <Container>
                    <Row>
                        <Col xs={12}>
                            <div className="content">
                                <h1>Global Coalition for COVID-19 Medical Care</h1>
                                <ul className="keywords">
                                    <li>KNOWLEDGE</li>
                                    <li>ACCURACY</li>
                                    <li>EFFICIENCY</li>
                                </ul>
                            </div>
                        </Col>
                        <Col xs={12} className="d-none d-md-block">
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
        </>
  );
}

export default Hero;