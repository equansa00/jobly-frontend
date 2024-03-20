// src/components/LoginForm.js
import React, { useState } from 'react';
import JoblyApi from '../api/JoblyApi';

function LoginForm({ setToken }) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(data => ({ ...data, [name]: value }));
  };

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

  return (
    <form onSubmit={handleSubmit}>
      {error && <div>Error: {error}</div>}
      <label htmlFor="username">Username</label>
      <input
        id="username"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <button type="submit">Log In</button>
    </form>
  );
}

export default LoginForm;
