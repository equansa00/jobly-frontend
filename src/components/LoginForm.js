// src/components/LoginForm.js
import React, { useState } from 'react';
import JoblyApi from '../api/JoblyApi';
import './LoginForm.css';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

/**
 * LoginForm component.
 * This component is responsible for rendering the login and registration form.
 * It uses react-router-dom's useNavigate for programmatic navigation.
 * @param {function} setToken - Function to set the authentication token.
 */
function LoginForm({ setToken }) {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true); // State variable to toggle between login and registration form
  const [formData, setFormData] = useState({ // State variable for form data
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
  });
  const [error, setError] = useState(null); // State variable for error messages

  // Function to handle form data changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(data => ({ ...data, [name]: value }));
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let token;
      if (isLogin) {
        // If it's login form, call the login API
        token = await JoblyApi.login(formData);
      } else {
        // If it's registration form, call the registration API and then login
        await JoblyApi.register(formData);
        token = await JoblyApi.login({
          username: formData.username,
          password: formData.password,
        });
      }
      // Set the token in parent component and local storage, and navigate to homepage
      setToken(token);
      localStorage.setItem('joblyToken', token);
      localStorage.setItem('username', formData.username);
      navigate('/');
    } catch (err) {
      // Handle error
      let errorMessage = err.toString();
      if (err.response && err.response.data && err.response.data.message) {
        errorMessage = err.response.data.message;
      }
      setError(errorMessage);
    }
  };

  // Function to toggle between login and registration form
  const toggleForm = () => {
    setIsLogin(!isLogin);
    setError(null); // Clear any existing errors
  };

  // Render the form
  return (
    <div className="form-container">
      <h2>{isLogin ? 'Log In' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit}>
        {error && <div className="error">Error: {error}</div>}
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input id="username" name="username" value={formData.username} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        {!isLogin && (
          <>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
          </>
        )}
        <button type="submit">{isLogin ? 'Log In' : 'Sign Up'}</button>
        <button type="button" onClick={toggleForm} className="toggle-button">
          {isLogin ? 'Need to create an account?' : 'Already have an account?'}
        </button>
      </form>
    </div>
  );
}

LoginForm.propTypes = {
  setToken: PropTypes.func.isRequired, // Prop validation
};

export default LoginForm;