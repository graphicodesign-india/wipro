import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function LoginForm() {
  return (
    <Row >
        <Col md={4} sm={12}></Col>
        <Col md={4} sm={12}> 
            <label>Full Name</label>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" style={{backgroundColor:"transparent"}}>Dr</span>
                </div>
                <input type="text" className="form-control" placeholder="Enter your full name" />
            </div>
        </Col>
        <Col md={4} sm={12}></Col>

        <Col md={4} sm={12}></Col>
        <Col md={4} sm={12}>
        <label>Mobile Number</label>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" style={{backgroundColor:"transparent"}}>+91</span>
                </div>
                <input type="text" className="form-control" placeholder="Enter Mobile number" />
            </div>
        </Col>
        <Col md={4} sm={12}></Col>

        <Col md={4} sm={12}></Col>
        <Col md={4} sm={12} style={{marginTop:"30px"}}>
        <button type="button" className="btn btn-primary btn-block" style={{backgroundColor:"#1BA7E2"}}>SUBMIT</button>
        </Col>
        <Col md={4} sm={12}></Col>
    </Row>
  );
}
export default LoginForm;