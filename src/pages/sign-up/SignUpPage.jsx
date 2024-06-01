import React from 'react';
import {Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import SignUpForm from '../../components/form/SignUpForm';

function SignUpPage() {
  return (
    <div style={{width: '600px', margin: 'auto', padding: '30px 30px 100px'}}>
      <h1 className="mt-5">Sign-Up Page</h1>
      <SignUpForm></SignUpForm>
      <div style={{marginTop: '20px'}}>
        <p>When you click the register button, you agree to <Nav.Link as={Link} to="/terms" style={{display: 'inline', color: 'blue'}}>our terms</Nav.Link> of use</p>
        <p>Do you have an account? <Nav.Link as={Link} to="/sign-in" style={{display: 'inline', color: 'blue'}}>Log in now</Nav.Link></p>
      </div>
    </div>
  );
}

export default SignUpPage;