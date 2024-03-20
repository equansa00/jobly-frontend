// src/components/LoginForm.js
import React, { useState } from 'react';
import JoblyApi from '../api/JoblyApi';
import './LoginForm.css'; 

/**
 * LoginForm is a React component that provides a form for user login.
 * It uses the JoblyApi to authenticate the user and receive a token.
 * The token is then passed to the parent component through the 'setToken' prop and stored in local storage.
 * The form data and any error during login are managed in the 'formData' and 'error' states respectively.
 * 
 * @param {Object} props - The properties passed to this component.
 * @param {Function} props.setToken - The function to set the token in the parent component.
 * 
 * @returns {JSX.Element} A JSX element representing the login form.
 */
function LoginForm({ setToken }) {
  console.log("Rendering LoginForm");

  // State for storing the form data
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  // State for storing any error that occurs during login
  const [error, setError] = useState(null);

  // Function for handling changes in the form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(data => ({ ...data, [name]: value }));
  };

  // Function for handling form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await JoblyApi.login(formData);
      setToken(token);
      localStorage.setItem('joblyToken', token); // Store the token
    } catch (err) {
      setError(err.toString());
    }
  };

  // Render the login form
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        {error && <div>Error: {error}</div>}
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
          required // You might want to ensure the field is filled
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required // You might want to ensure the field is filled
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default LoginForm;