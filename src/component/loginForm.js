import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
function LoginForm() {
  return (

    <Row className="justify-content-md-center" >
        <Col xs md={4}> 
        <Form>
            <Form.Group>
                <Form.Label htmlFor="formName">Full Name</Form.Label>
                <InputGroup className="mb-2">
                    <InputGroup.Prepend>
                    <InputGroup.Text>Dr.</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl id="formName" placeholder="Full name" />
                </InputGroup>
            </Form.Group>
            <Form.Group>
                <Form.Label htmlFor="formMobile">Mobile Number</Form.Label>
                <InputGroup className="mb-2">
                    <InputGroup.Prepend>
                    <InputGroup.Text>+91</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl id="formMobile" placeholder="Mobile Number" />
                </InputGroup>
            </Form.Group>

            <Button variant="primary" type="submit" className="btn-block onboarding-btn">
                Submit
            </Button>
        </Form>
        </Col>
    </Row>
  );
}
export default LoginForm;