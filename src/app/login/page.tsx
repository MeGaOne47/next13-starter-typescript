"use client"
import React, { useState } from "react";
import { Button, Form, Container, Row, Col, Card, Image } from "react-bootstrap";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate a login request, replace with your actual authentication logic
    if (email === "user@example.com" && password === "password") {
      // Successful login
      setError("");
      alert("Login successful!");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} sm={8} md={6} lg={4}>
          <Card className="shadow">
            <Card.Header as="h5" className="bg-primary text-white text-center">
              <Image src="/logo.png" alt="Company Logo" roundedCircle width={60} height={60} />
              Login
            </Card.Header>
            <Card.Body>
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}
              <Form onSubmit={handleLogin}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>
                <Button variant="primary" type="submit" >
                  Login
                </Button>
              </Form>
            </Card.Body>
            <Card.Footer className="text-center">
              <small>Don't have an account? <a href="#">Sign up</a></small>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
