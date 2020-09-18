import React,{useState} from 'react';
import Container from 'react-bootstrap/Container';
import Header from '../component/header';
import { Button, ButtonToolbar, Modal } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Otp() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
        <Container>
            <Header/>
            <Row>
                <Col md={12}> 
                    <h3 className="text-center onboarding-page_title">Please Enter OTP</h3>
                    <p className="text-center onboarding-page_sub_title">Your OTP has been sent to <b>88844 88839</b> <span style={{cursor:"pointer",color:"#1BA6E1"}} onClick={handleShow}>Edit</span> </p> 
                </Col>
            </Row>
            <Row  className="justify-content-md-center" >
                <Col xs={12} md={4}>
                <Row>
                <Col xs={12}>
                    <label style={{marginBottom:"15px"}}>Enter your OTP</label>
                    <div className="input-otp">
                        <div className="input-wrapper"><input type="text" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" /></div>
                        <div className="input-wrapper"><input type="text" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" /></div>
                        <div className="input-wrapper"><input type="text" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" /></div>
                        <div className="input-wrapper"><input type="text" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" /></div>
                        <div className="input-wrapper"><input type="text" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" /></div>
                        <div className="input-wrapper"><input type="text" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" /></div>
                    </div>
                    <p style={{fontSize:"12px",marginTop:"15px"}}>Resend OTP in 00:10</p>
                </Col>
                <Col xs={12}>
                <Button variant="primary" type="submit" className="btn-block onboarding-btn">
                Submit
                </Button>
                </Col>
                

            </Row>
                </Col>
            </Row>
            <Row>
                <Modal show={show} onHide={handleClose} animation={false} style={{marginTop:"10%"}}>
                    <Modal.Body>
                        <Row>
                            <Col>
                            <label>Mobile Number</label>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" style={{backgroundColor:"transparent"}}>+91</span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Enter Mobile number" />
                                </div>
                            </Col>
                        </Row>
                    </Modal.Body>
                </Modal>
            </Row>
        </Container>
  );
}

export default Otp;