import { React, useState } from 'react';
import {Button, Form} from 'react-bootstrap';
import AuthService from "../../services/auth/auth.service"
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function SignUpForm() {
  
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    password: ''
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    phone: '',
    password: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Reset formErrors when input changes
    setFormErrors({
      ...formErrors,
      [name]: ''
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let isValid = true;
    const newFormErrors = {};

    // Check if fields are empty
    if (!formData.name) {
      newFormErrors.name = 'Full Name is required';
      isValid = false;
    }

    if (!formData.phone) {
      newFormErrors.phone = 'Phone Number is required';
      isValid = false;
    }

    if (!formData.password) {
      newFormErrors.password = 'Password is required';
      isValid = false;
    }

    if (!isValid) {
      setFormErrors(newFormErrors);
      return;
    }

    console.log('Form submitted:', formData);
    AuthService.register(formData.name, formData.phone,formData.password).then(
      (response) => {
        toast.success('Registered successfully')
        navigate('/sign-in');
      }).catch((error) => {
        console.error('Error during login:', error);
        toast.error('An error occurred, please try again.')
      });

  };

  return (
    <Form onSubmit={handleSubmit}>

      <Form.Group className="mb-3" controlId="formBasicname">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" name="name" className={formErrors.name ? 'error-input' : ''} onChange={handleInputChange}/>
        {formErrors.name && <p className="error-text">{formErrors.name}</p>} 
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="phone" name="phone" className={formErrors.phone ? 'error-input' : ''} onChange={handleInputChange}/>
        {formErrors.phone && <p className="error-text">{formErrors.phone}</p>} 
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" className={formErrors.password ? 'error-input' : ''} onChange={handleInputChange}/>
        {formErrors.password && <p className="error-text">{formErrors.password}</p>} 
      </Form.Group>

      <Button variant="primary" type="submit" style={{width: '100%'}}>
        SIGN UP
      </Button>
 
    </Form>
  );
}

export default SignUpForm;