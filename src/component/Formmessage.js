import React from 'react';
import { Link } from 'react-router-dom';
import {Container, Row, Col, InputGroup, Form, Modal, Button} from 'react-bootstrap';
import { Search } from 'react-feather';


function Formmessage(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        
        <Modal.Body>
          
          <p style={{padding:'36px 56px',backgroundColor:"#E3F2F8",textAlign:"center", fontSize:"18px"}}>
          Thank you for reaching out. Our team will respond at the earliest
          </p>
          <Button onClick={props.onHide} style={{backgroundColor:"#1BA7E2", borderColor:"#1BA7E2",float:"right"}}>Okay</Button>
        </Modal.Body>
        
      </Modal>
    );
  }
  export default Formmessage;