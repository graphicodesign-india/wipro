import React from 'react';
import { Link } from 'react-router-dom';
import {Container, Row, Col, InputGroup, Form, FormControl, Button} from 'react-bootstrap';

import { AlignCenter, Bookmark, BookOpen, Share, ArrowUp } from 'react-feather';
import styles from './Related.module.css';


function Related() {
    return (
        <>
        <div className={styles.related}>
        <div className={styles.banner}>
            <img className="img-fluid" src={require('../images/thumb-01.jpg')} alt=""/>
            <Button variant="light" className={styles.category_name}><AlignCenter height={12} width={12} /> Article</Button>
            <Button variant="light" className={styles.bookmark}><Bookmark /></Button>
        </div>

        <div className={styles.headers}>
            <p className={styles.tag}>Therapy</p>
            <h3>Effect of Remdesivir vs Standard Care on Clinical Status at 11 Days in Patients</h3>
            <p>By: Dr Krishna Seshadhri • Aug 23, 2020</p>
            <p className={styles.excerpt}>Patients with moderate COVID19 randomised to 5 days of remdesivir performed clinically better than performed clinically better than performed...</p>
            <hr className="d-block d-md-none" />
        </div>
        </div>
        </>
    )
}

export default Related