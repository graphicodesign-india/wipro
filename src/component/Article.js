import React from 'react';
import { Link } from 'react-router-dom';
import {Container, Row, Col, InputGroup, Form, FormControl, Button} from 'react-bootstrap';
import { Bookmark } from 'react-feather';


function Article(props) {
  return (
        <>
            <div className="article-card">
                <a className="taxo" href="#">{props.category}</a>
                <a className="title" href="#">{props.title}</a>
                <p className="author">By - {props.author}</p>
                <p className="excerpt">{props.excerpt}</p>
                <div className="footer">
                    <a href="#" className="bookmark left"><Bookmark /> <span>SAVE FOR LATER</span></a>
                    <p className="published right">{props.publishedOn}</p>
                </div>
                <div className="clearfix"></div>
                <hr />
            </div>
        </>
  );
}

export default Article;