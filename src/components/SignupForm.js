// src/components/SignupForm.js
import React, { useState } from 'react';
import JoblyApi from '../api/JoblyApi';

/**
 * SignupForm is a React component that provides a form for user signup.
 * It uses the JoblyApi to register the user and receive a token.
 * The token is then passed to the parent component through the 'setToken' prop and stored in local storage.
 * The form data and any error during signup are managed in the 'formData' and 'error' states respectively.
 * 
 * @param {Object} props - The properties passed to this component.
 * @param {Function} props.setToken - The function to set the token in the parent component.
 * 
 * @returns {JSX.Element} A JSX element representing the signup form.
 */
function SignupForm({ setToken }) {
  // State for storing the form data
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
  });

  // State for storing any error that occurs during signup
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
      const token = await JoblyApi.signup(formData);
      setToken(token);
      localStorage.setItem('joblyToken', token); // Store the token
    } catch (err) {
      setError(err.toString());
    }
  };

  // Render the signup form
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