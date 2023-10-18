"use client"
import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <Container className="Container" fluid>
      <Card className='text-black m-5' style={{ borderRadius: '25px' }}>
        <Card.Body>
          <Row>
            <Col md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
              <p className="text-center h1 fw-bold mb-4 mx-1 mx-md-4 mt-4">Sign up</p>

              <div className="d-flex flex-row align-items-center mb-2">
                <Form.Group>
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>
              </div>

              <div className="d-flex flex-row align-items-center mb-2">
                <Form.Group>
                  <Form.Label>Your Email</Form.Label>
                  <Form.Control type="email" placeholder="Your Email" />
                </Form.Group>
              </div>

              <div className="d-flex flex-row align-items-center mb-2">
                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </div>

              <div className="d-flex flex-row align-items-center mb-2">
                <Form.Group>
                  <Form.Label>Repeat your password</Form.Label>
                  <Form.Control type="password" placeholder="Repeat your password" />
                </Form.Group>
              </div>

              <div className='mb-2'>
                <Form.Check type="checkbox" label="Subscribe to our newsletter" />
              </div>

              <div className="RegisterButton">
                <Button variant="primary" size='lg'>
                  Register
                </Button>
              </div>
            </Col>

            <Col md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <Image src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid className="CardImage" />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default App;






