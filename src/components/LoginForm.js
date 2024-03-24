// src/components/LoginForm.js
import React, { useState } from 'react';
import JoblyApi from '../api/JoblyApi';
import './LoginForm.css';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function LoginForm({ setToken }) {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(data => ({ ...data, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let token;
      if (isLogin) {
        token = await JoblyApi.login(formData);
      } else {
        await JoblyApi.register(formData);
        token = await JoblyApi.login({
          username: formData.username,
          password: formData.password,
        });
      }
      setToken(token);
      localStorage.setItem('joblyToken', token);
      localStorage.setItem('username', formData.username);
      navigate('/');
    } catch (err) {
      // Customize error based on response for better user experience
      let errorMessage = err.toString();
      if (err.response && err.response.data && err.response.data.message) {
        errorMessage = err.response.data.message;
      }
      setError(errorMessage);
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setError(null); // Clear any existing errors
  };

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
  setToken: PropTypes.func.isRequired,
};

export default LoginForm;
