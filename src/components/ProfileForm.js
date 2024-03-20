import React, { useState, useEffect } from 'react';
import JoblyApi from '../api/JoblyApi';

function ProfileForm({ username }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  useEffect(() => {
    async function getUser() {
      try {
        const userRes = await JoblyApi.getUser(username);
        setFormData(userRes);
      } catch (err) {
        console.error("Failed to load user profile", err);
      }
    }
    getUser();
  }, [username]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(data => ({ ...data, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await JoblyApi.updateUser(username, formData);
    } catch (err) {
      console.error("Failed to update profile", err);
    }
  };

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