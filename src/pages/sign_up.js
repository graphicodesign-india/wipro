import React from 'react';
import Container from 'react-bootstrap/Container';
import Header from '../component/header';
import SignUpForm from '../component/signUpForm';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function SignUp() {
  return (
    <React.Fragment>
        <Container style={{marginBottom:"200px"}}>
            <Header/>
            <Row>
                <Col md={12}> 
                    <h3 className="text-center onboarding-page_title">Sign Up</h3>
                </Col>
            </Row>
            <Row className="justify-content-md-center" >
                <Col xs md={8}>
                    <SignUpForm />
                </Col>
            </Row>
            
        </Container>
        <Container fluid style={{paddingTop: "20px",background: "#FFFFFF 0% 0% no-repeat padding-box",boxShadow:"0px -3px 20px #00000029",marginTop:"20px",position:"fixed",left:"0",bottom:"0"}}>
            <Row className="justify-content-md-center" >
                <Col md={4}>
                <center>
                    <button className="btn btn-primary onboarding-btn btn-block">SUBMIT</button>
                    <p style={{font:"normal normal normal 12px/22px Roboto",fontSize:"12px",marginTop:"15px",fontWeight:"500"}}>
                        By clicking on submit I agree to all <a href="">Terms &amp; Conditions</a>
                    </p>
                    <p style={{font:"normal normal normal 14px/16px Roboto", fontSize:"14px",marginTop:"10px"}}>
                        Already have an account ? <a href="">Sign In</a>
                    </p>
                </center>
                </Col>
            </Row>
        </Container>
    </React.Fragment>
  );
}

export default SignUp;