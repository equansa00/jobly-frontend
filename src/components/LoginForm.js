// src/components/LoginForm.js
import React, { useState } from 'react';
import JoblyApi from '../api/JoblyApi';
import './LoginForm.css';
import PropTypes from 'prop-types';

function LoginForm({ setToken }) {
  // Define isLogin state to toggle between login and registration
  const [isLogin, setIsLogin] = useState(true);

  // Initialize formData state to store user input
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
  });

  // Initialize error state to store and display any login/registration errors
  const [error, setError] = useState(null);

  // handleChange updates formData state based on user input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(data => ({ ...data, [name]: value }));
  };

  // handleSubmit manages form submission for both login and registration
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let token;
      if (isLogin) {
        // Handle login
        token = await JoblyApi.login({
          username: formData.username,
          password: formData.password,
        });
      } else {
        // Handle registration
        await JoblyApi.register(formData);
        token = await JoblyApi.login({
          username: formData.username,
          password: formData.password,
        });
      }
      setToken(token);
      localStorage.setItem('joblyToken', token);
    } catch (err) {
      setError(err.toString());
    }
  };

  // toggleForm switches between login and registration forms
  const toggleForm = () => {
    setIsLogin(!isLogin);
    setError(null);
  };

  return (
    <div className="form-container">
      <h2>{isLogin ? 'Log In' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit}>
        {error && <div className="error">Error: {error}</div>}
        {/* Username and password fields */}
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input id="username" name="username" value={formData.username} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        {/* Additional fields for registration */}
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
        <button type="button" onClick={toggleForm}>
          {isLogin ? 'Need to create an account?' : 'Already have an account?'}
        </button>
      </form>
    </div>
  );
}

LoginForm.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default LoginForm;
