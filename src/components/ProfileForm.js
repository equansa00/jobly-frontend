// src/components/ProfileForm.js
import React, { useState, useEffect } from 'react';
import JoblyApi from '../api/JoblyApi';

/**
 * ProfileForm is a React component that provides a form for updating a user's profile.
 * It uses the JoblyApi to fetch the user's current profile and update it.
 * The user's username is received as a prop.
 * The form data and the user's current profile are managed in the 'formData' state.
 * 
 * @param {Object} props - The properties passed to this component.
 * @param {string} props.username - The username of the user.
 * 
 * @returns {JSX.Element} A JSX element representing the profile form.
 */
function ProfileForm({ username }) {
  // State for storing the form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  // useEffect hook for fetching the user's current profile when the username changes
  useEffect(() => {
    // Function for fetching the user's current profile from the API
    async function getUser() {
      try {
        const userRes = await JoblyApi.getUser(username);
        setFormData(userRes);
      } catch (err) {
        console.error("Failed to load user profile", err);
        // handle error appropriately in your UI
      }
    }
    getUser();
  }, [username]);

  // Function for handling changes in the form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(data => ({ ...data, [name]: value }));
  };

  // Function for handling form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await JoblyApi.updateUser(username, formData);
    } catch (err) {
      console.error("Failed to update profile", err);
      // handle error appropriately in your UI
    }
  };

  // Render the profile form
  return (
    <form onSubmit={handleSubmit}>
      <input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" required />
      <input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" required />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      <button type="submit">Save Changes</button>
    </form>
  );
}

export default ProfileForm;