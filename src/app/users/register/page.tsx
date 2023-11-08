"use client"
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { useState } from 'react';
import { Button, ButtonGroup, Form, InputGroup, ToastContainer } from 'react-bootstrap';
import { toast } from 'react-toastify';

function Register() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: '',
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword); // Đảo ngược giá trị hiện tại của showPassword
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (!formData.email || !formData.password || !formData.username) {
      // Validation failed, display an error toast
      toast.error('Please fill in all the fields', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    // Send a POST request to the registration endpoint
    fetch('http://localhost:8000/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.status === 201) {
          toast.success('Registration successful', { 
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          // Registration successful, you can redirect the user or show a success message
          console.log('Registration successful');
          window.location.href = 'login';
        } else {
          toast.error('Registration failed', { 
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          // Handle registration failure, show an error message, etc.
          console.error('Registration failed');
        }
      })
      .catch((error) => {
        toast.error('Error.', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        console.error('Error:', error);
      });
  };

  return (
    <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
      <div className="col-md-6" style={{ border: '2px solid #000', padding: '20px', borderRadius: '10px' }}>
        <h3 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Register</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Địa chỉ Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Nhập địa chỉ email"
              required
              autoComplete="current-email"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Mật khẩu</Form.Label>
            <InputGroup>
              <Form.Control
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Mật khẩu"
                required
                autoComplete="current-password"
              />
              <InputGroup.Text>
                <Button
                  variant="light"
                  onClick={handleTogglePassword}
                >
                  {showPassword ? (
                    <FontAwesomeIcon icon={faEyeSlash} />
                  ) : (
                    <FontAwesomeIcon icon={faEye} />
                  )}
                </Button>
              </InputGroup.Text>
            </InputGroup>
          </Form.Group>

          <Form.Group controlId="formBasicUsername">
            <Form.Label>Tên đăng nhập</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Nhập tên đăng nhập"
              required
              autoComplete="current-username"
            />
          </Form.Group>
          <ButtonGroup style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '10px 0'}}>
            <Button variant="primary" onClick={handleSubmit}>
              Register
            </Button>
            <Button variant="danger">
              <Link href="login" style={{ textDecoration: 'none', color: 'white' }}>
                Back to Login
              </Link>
            </Button>
          </ButtonGroup>
        </Form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Register;
