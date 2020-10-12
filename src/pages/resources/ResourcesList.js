import React from 'react';
import { Container, Row, Col, Button, Form, InputGroup, FormControl, Dropdown, DropdownButton } from 'react-bootstrap';

import styles from './List.module.css';
import Navigation from '../../component/Navigation';
import Footer from '../../component/Footer';
import Related from '../../component/Related';
import { Filter, List, BookOpen, Share, ArrowUp } from 'react-feather';



function ResourcesList() {
  return (
        <>
            <Navigation />
            <Container>
                <Row>
                    <Col md={2} className="d-none d-md-block">
                    <Form.Group controlId="formBasicEmail" style={{marginTop:"84px"}}>
                                            <Form.Control type="email" placeholder="Search" />
                                        </Form.Group>
                    <div className={`${styles.dropdownform} ${styles.extra}`}>
                                            <span className={styles.dfheader}>Resource Type</span>
                                            <Form.Group controlId="1" className={styles.dfinput}>
                                                <Form.Check type="checkbox" label="Articles" checked />
                                            </Form.Group>

                                            <Form.Group controlId="2" className={styles.dfinput}>
                                                <Form.Check type="checkbox" label="Videos" />
                                            </Form.Group>

                                            <span className={styles.dfheader}>Resource Type</span>
                                            <Form.Group controlId="3" className={styles.dfinput}>
                                                <Form.Check type="checkbox" label="Therapy" />
                                            </Form.Group>

                                            <Form.Group controlId="4" className={styles.dfinput}>
                                                <Form.Check type="checkbox" label="Prevention" />
                                            </Form.Group>

                                            <Form.Group controlId="5" className={styles.dfinput}>
                                                <Form.Check type="checkbox" label="Diagnosis" />
                                            </Form.Group>

                                            <Form.Group controlId="6" className={styles.dfinput}>
                                                <Form.Check type="checkbox" label="Prognosis" />
                                            </Form.Group>
                                        
                                            </div>
                    </Col>
                    <Col xs={12} md={10}>
                        <Row className="align-items-center">
                            <Col xs={12} md={6}>
                                <div className={styles.breadcrumbs}>
                                    <a href="#">Home</a><span className={styles.space}>/</span>
                                    <a href="#">Resources</a><span className={styles.space}>/</span>
                                    <a className={styles.current} href="#">Articles</a>
                                </div>
                            </Col>
                            <Col md={6} className="d-none d-md-block">
                            <DropdownButton 
                                        alignRight
                                            id={styles.dropdown}
                                            className={styles.dropdown}
                                            drop={false}
                                            style={{marginTop: "15px", float:"right"}}
                                            variant="outline-secondary"
                                            title='Sort by: Newest First'
                                        >
                                            <Dropdown.Header>Sort by:</Dropdown.Header>
                                            <Dropdown.Item href="#/action-2">Newest First</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item href="#/action-3">No of Upvotes</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item href="#/action-3">No of Reads</Dropdown.Item>
                                        </DropdownButton>
                            </Col>

                            <Col className="d-block d-md-none">
                                <Row>
                                    <Col style={{paddingRight:"0px"}}>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Control type="email" placeholder="Search" />
                                        </Form.Group>
                                    </Col>
                                    <Col className="col-auto">
                                    <DropdownButton 
                                        alignRight
                                            id={styles.dropdown}
                                            className={styles.dropdown}
                                            drop={false}
                                            style={{marginRight: "15px"}}
                                            variant="outline-secondary"
                                            title={<List />}
                                        >
                                            <Dropdown.Header>Sort by:</Dropdown.Header>
                                            <Dropdown.Item href="#/action-2">Newest First</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item href="#/action-3">No of Upvotes</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item href="#/action-3">No of Reads</Dropdown.Item>
                                        </DropdownButton>
                                        <DropdownButton 
                                        alignRight
                                            id={styles.dropdown}
                                            className={styles.dropdown}
                                            drop={false}
                                            variant="outline-secondary"
                                            title={<Filter />}
                                        >
                                            
                                            <div className={styles.dropdownform}>
                                            <span className={styles.dfheader}>Resource Type</span>
                                            <Form.Group controlId="1" className={styles.dfinput}>
                                                <Form.Check type="checkbox" label="Articles" checked />
                                            </Form.Group>

                                            <Form.Group controlId="2" className={styles.dfinput}>
                                                <Form.Check type="checkbox" label="Videos" />
                                            </Form.Group>

                                            <span className={styles.dfheader}>Resource Type</span>
                                            <Form.Group controlId="3" className={styles.dfinput}>
                                                <Form.Check type="checkbox" label="Therapy" />
                                            </Form.Group>

                                            <Form.Group controlId="4" className={styles.dfinput}>
                                                <Form.Check type="checkbox" label="Prevention" />
                                            </Form.Group>

                                            <Form.Group controlId="5" className={styles.dfinput}>
                                                <Form.Check type="checkbox" label="Diagnosis" />
                                            </Form.Group>

                                            <Form.Group controlId="6" className={styles.dfinput}>
                                                <Form.Check type="checkbox" label="Prognosis" />
                                            </Form.Group>
                                        
                                            </div>
                                        </DropdownButton>
                                        
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={4}>
                                <Related />
                            </Col>

                            <Col xs={12} md={4}>
                                <Related />
                            </Col>

                            <Col xs={12} md={4}>
                                <Related />
                            </Col>

                            <Col xs={12} md={4}>
                                <Related />
                            </Col>

                            <Col xs={12} md={4}>
                                <Related />
                            </Col>

                            <Col xs={12} md={4}>
                                <Related />
                            </Col>

                            <Col xs={12} md={4}>
                                <Related />
                            </Col>

                            <Col xs={12} md={4}>
                                <Related />
                            </Col>

                            <Col xs={12} md={4}>
                                <Related />
                            </Col>

                            <Col xs={12} md={4}>
                                <Related />
                            </Col>

                            <Col xs={12} md={4}>
                                <Related />
                            </Col>
                        </Row>
                    
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
        );
      }
      
export default ResourcesList;