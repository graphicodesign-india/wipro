import React from 'react';
import Container from 'react-bootstrap/Container';
import Header from '../component/header';
import LoginForm from '../component/loginForm';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Login() {
  return (
        <Container>
            <Header/>
            <Row>
                <Col md={12}> 
                    <p className="text-center sign_up">Sign In</p>
                </Col>
            </Row>
            <LoginForm />
        </Container>
  );
}

export default Login;