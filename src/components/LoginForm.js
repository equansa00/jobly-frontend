import React, { useState } from 'react';
import JoblyApi from '../api/JoblyApi';
import './LoginForm.css';

function LoginForm({ setToken }) {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and registration
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    firstName: '', // Additional fields for registration
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
        // Login flow
        token = await JoblyApi.login(formData);
      } else {
        // Registration flow
        await JoblyApi.register(formData); // Assuming you have a register method
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

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setError(null); // Reset error messages when toggling
  };

  return (
    <div className="form-container">
      <h2>{isLogin ? 'Log In' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit}>
        {error && <div className="error">Error: {error}</div>}
        {/* Username and password fields are always shown */}
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

export default LoginForm;
