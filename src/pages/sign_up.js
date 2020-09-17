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
                    <p className="text-center sign_up">Sign Up</p>
                </Col>
            </Row>
            <SignUpForm />
        </Container>
        <Container fluid style={{paddingTop: "20px",background: "#FFFFFF 0% 0% no-repeat padding-box",boxShadow:"0px -3px 20px #00000029",marginTop:"20px",position:"fixed",left:"0",bottom:"0"}}>
            <Row>
                <Col md={12}>
                <center>
                    <button className="btn btn-primary sign_up_submit_btn" style={{backgroundColor:"#1BA7E2"}}> SUBMIT </button>
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