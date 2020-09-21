import React from 'react';
import { Link } from 'react-router-dom';
import {Container, Row, Col, InputGroup, Form, FormControl, Button} from 'react-bootstrap';
import { Bookmark } from 'react-feather';


function Trending(props) {
  return (
        <>
            <div className="article-card">
                <Row className="align-items-center">
                    <Col xs={12} md={5}>
                        <img className="img-fluid" src={require('../images/'+props.thumbnail)} />
                    </Col>

                    <Col xs={12} md={7}>
                        <a className="taxo" href="#">{props.category}</a>
                        <a className="title" href="#">{props.title}</a>
                        <p className="author">By - {props.author}</p>
                        <p className="excerpt">{props.excerpt}</p>
                        <div className="footer">
                            <a href="#" className="bookmark left"><Bookmark /> <span>SAVE FOR LATER</span></a>
                            <p className="published right">{props.publishedOn}</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
  );
}

export default Trending;