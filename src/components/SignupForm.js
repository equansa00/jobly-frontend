// src/components/SignupForm.js
import React, { useState } from 'react';
import JoblyApi from '../api/JoblyApi';

/**
 * SignupForm component allows new users to register.
 * On successful registration, the user receives a token which is passed
 * to the parent component via the setToken prop and stored in local storage.
 * This component manages form data and any errors during registration in its state.
 * 
 * @param {Object} props - Component props
 * @param {Function} props.setToken - Function to set the user's token in the parent component
 * @returns {JSX.Element} The JSX code for the SignupForm component.
 */
function SignupForm({ setToken }) {
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
    setFormData(f => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await JoblyApi.register(formData);
      setToken(token);
      localStorage.setItem('joblyToken', token);
    } catch (err) {
      setError(err.toString());
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        {error && <div className="alert alert-danger">Error: {error}</div>}
        {/* Input fields for username, password, firstName, lastName, and email */}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignupForm;
