import React from 'react';
import {Button, Form} from 'react-bootstrap';

function LoginForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="phone"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"/>
      </Form.Group>

      <Button variant="primary" type="submit" style={{width: '100%'}}>
        SIGN IN
      </Button>
    </Form>
  );
}

export default LoginForm;