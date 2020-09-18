import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Header() {
  return (
    <header>
      <Row>
        <Col md={12}> 
        <img
            src='/assets/Group_620.png'
            alt="Generic placeholder"
            className="mx-auto d-block img-fluid"
            />
        </Col>
        <Col md={12}>
        <p className="text-center header-title">Exchange best practices for COVID-19 Medical care</p>
        </Col>
    </Row>
    </header>
  );
}
export default Header;