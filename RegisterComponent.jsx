import React from 'react';
import { Form, Card, Button } from 'react-bootstrap';

const RegisterComponent = () => {
  return (
    <Card className="p-4 mx-auto" style={{ maxWidth: '400px' }}>
      <h3 className="text-center mb-3">Register</h3>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">
          Register
        </Button>
      </Form>
    </Card>
  );
};

export default RegisterComponent;