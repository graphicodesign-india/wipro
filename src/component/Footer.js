import React from 'react';
import { Link } from 'react-router-dom';
import {Container, Row, Col, InputGroup, Form, FormControl, Button} from 'react-bootstrap';
import { Bookmark } from 'react-feather';
import styles from './Footer.module.css';


function Footer(props) {
  return (
        <>
            <footer className={styles.footer}>
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12}><hr /></Col>
                        <Col xs={12} md={4}>
                            <img className={styles.logo} src={require('../images/wipro-logo.png')}></img>
                        </Col>
                        <Col xs={12} md={8}>
                            <ul className={styles.footer_links}>
                                <li><Link to="/">Resources</Link></li>
                                <li><Link to="/">About us</Link></li>
                                <li><Link to="/">Contact us</Link></li>
                            </ul>
                        </Col>

                        <Col xs={12}><hr /></Col>
                        <Col xs={12}>
                            <p className={styles.copyrights}>All rights reserved GCCMC 2020</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
  );
}

export default Footer;