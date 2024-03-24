// src/components/NavBar.js
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './NavBar.css';

function NavBar({ setToken }) {
  const navigate = useNavigate();
  const isUserLoggedIn = !!localStorage.getItem('joblyToken');

  const handleLogout = () => {
    localStorage.removeItem('joblyToken'); // Remove the token from localStorage
    localStorage.removeItem('username'); // Optionally remove the username if stored
    setToken(null); // Update the parent state to reflect logout
    navigate('/'); // Redirect to the homepage or any other page
  };

  return (
    <div className="navbar">
      <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : undefined}>Home</NavLink>
      <NavLink to="/companies" className={({ isActive }) => isActive ? "active-link" : undefined}>Companies</NavLink>
      <NavLink to="/jobs" className={({ isActive }) => isActive ? "active-link" : undefined}>Jobs</NavLink>
      {!isUserLoggedIn ? (
        <NavLink to="/login" className={({ isActive }) => isActive ? "active-link" : undefined}>Login</NavLink>
      ) : (
        <button onClick={handleLogout} className="logout-button">Logout</button>
      )}
    </div>
  );
}

export default NavBar;
