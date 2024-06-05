import { React, useState } from 'react';
import {Button, Form} from 'react-bootstrap';
import AuthService from "../../services/auth/auth.service"
import { useNavigate } from 'react-router-dom';

function LoginForm(props) {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    phone: '',
    password: ''
  });

  const [formErrors, setFormErrors] = useState({
    phone: '',
    password: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });

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
    if (!formData.phone) {
      newFormErrors.phone = 'Phone number is required';
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
    AuthService.login(formData.phone, formData.password).then(
      (response) => {
        console.log('re:' + response)
        props.handleSettingCurrentUser(response)
        navigate('/');
      }
    )
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="text" name="phone" value={formData.phone} onChange={handleInputChange}
          className={formErrors.phone ? 'error-input' : ''}/>
        {formErrors.phone && <p className="error-text">{formErrors.phone}</p>} 
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" value={formData.password} onChange={handleInputChange}
          className={formErrors.password ? 'error-input' : ''}/>
        {formErrors.password && <p className="error-text">{formErrors.password}</p>}
      </Form.Group>

      <Button variant="primary" type="submit" style={{width: '100%'}}>
        SIGN IN
      </Button>
    </Form>
  );
}

export default LoginForm;