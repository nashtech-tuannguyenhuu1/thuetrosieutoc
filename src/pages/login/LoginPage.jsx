import React from 'react';
import LoginForm from '../../components/form/LoginForm';
import {Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function LoginPage() {
  return (
    <div style={{width: '600px', margin: 'auto', padding: '30px 30px 100px'}}>
      <h1 className="mt-5">Sign-In Page</h1>
      <LoginForm></LoginForm>
      <div className="d-flex justify-content-between mt-3">
        <Nav.Link as={Link} to="/forgot-password">Forgot Password?</Nav.Link>
        <Nav.Link as={Link} to="/sign-up">Create New Account</Nav.Link>
      </div>
    </div>
  );
}

export default LoginPage;