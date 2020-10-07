import React from 'react';
import { Container, Row, Col, Button, Form, InputGroup, FormControl } from 'react-bootstrap';

import styles from './Contact.module.css';
import Navigation from '../../component/Navigation';
import Footer from '../../component/Footer';
import Formmessage from '../../component/Formmessage';
import { MapPin, PhoneCall, Mail } from 'react-feather';


function Contact() {
    const [modalShow, setModalShow] = React.useState(false);
  return (
        <>
            <Navigation />
            <Container>
                <Row>
                    <Col>
                        <h2 className={styles.page_title}>Write to Us</h2>
                    </Col>
                </Row>
                <Form>
                    <Row>
                        <Form.Group as={Col} xs={12} md={6} controlId="formGridEmail">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter first name" />
                        </Form.Group>

                        <Form.Group as={Col} xs={12} md={6} controlId="formGridPassword">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter last name" />
                        </Form.Group>
                    </Row>

                    
                    <Row>
                        <Form.Group as={Col} xs={12} md={6} controlId="formGridEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="text" placeholder="Enter Email Address" />
                        </Form.Group>

                        <Form.Group as={Col} xs={12} md={6} controlId="formGridPassword">
                        <Form.Label htmlFor="formMobile">Mobile Number</Form.Label>
                            <InputGroup className="mb-2">
                                <InputGroup.Prepend>
                                <InputGroup.Text>+91</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl id="formMobile" placeholder="Mobile Number" />
                            </InputGroup>
                        </Form.Group>
                       
                    </Row>

                    

                    <Form.Group controlId="formGridAddress2">
                        <Form.Label>Message</Form.Label>
                        <Form.Control  as="textarea" rows={6} placeholder="Type your message" />
                    </Form.Group>

                    <Button variant="primary" className={styles.button} onClick={() => setModalShow(true)}>
                        Submit
                    </Button>
                </Form>
            </Container>
            <Formmessage
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

            <section className={styles.locations}>
                <Container>
                    <Row>
                        <Col xs={12}>
                            <h2 className={styles.section_title}>Contact Us</h2>
                            <p className={styles.section_desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry’s standard dummy text</p>
                        </Col>
                        <Col md={5}>
                            <ul className={styles.links}>
                                <li><span><MapPin /></span><span>Wipro Limited. Doddakannelli, Sarjapur Road, Bengaluru-560 035.</span></li>
                                <li><span><PhoneCall /></span><span><a href="tel:+918046827999">+91 80 46827999</a>&nbsp;|&nbsp;<a href="tel:+918046726000">+91 80 46726000</a></span></li>
                                <li><span><Mail /></span><span><a href="mailto:info@gccmc.in">info@gccmc.in</a></span></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
  );
}

export default Contact;