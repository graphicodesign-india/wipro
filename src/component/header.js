import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Header() {
  return (
    <Row style={{marginTop:"20px"}}>
        <Col md={12}> 
        <img
            src='/assets/Group_620.png'
            alt="Generic placeholder"
            className="mx-auto d-block img-fluid"
            />
        </Col>
        <Col md={12}>
        <p className="text-center sign_up_heading">Exchange best practices for COVID-19 Medical care</p>
        </Col>
    </Row>
  );
}
export default Header;