import React, { useState } from 'react';
import JoblyApi from '../api/JoblyApi';

function SignupForm({ setToken }) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    // Add other fields as needed
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(data => ({ ...data, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await JoblyApi.signup(formData);
      setToken(token);
      localStorage.setItem('joblyToken', token); // Store the token
    } catch (err) {
      setError(err.toString());
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" value={formData.username} onChange={handleChange} placeholder="Username" required />
      <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      <button type="submit">Sign Up</button>
      {error && <div>{error}</div>}
    </form>
  );
}

export default SignupForm;