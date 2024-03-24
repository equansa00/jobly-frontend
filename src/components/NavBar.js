// src/components/NavBar.js
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './NavBar.css';

/**
 * NavBar component.
 * This component is responsible for rendering the navigation bar of the application.
 * It uses react-router-dom's NavLink for navigation links and useNavigate for programmatic navigation.
 * @param {function} setToken - Function to set the authentication token.
 */
function NavBar({ setToken }) {
  // useNavigate hook for programmatic navigation
  const navigate = useNavigate();

  // Check if the user is logged in by checking if the token exists in localStorage
  const isUserLoggedIn = !!localStorage.getItem('joblyToken');

  /**
   * Function to handle logout.
   * This function removes the token and username from localStorage, sets the token to null in the parent component,
   * and redirects the user to the homepage.
   */
  const handleLogout = () => {
    localStorage.removeItem('joblyToken'); // Remove the token from localStorage
    localStorage.removeItem('username'); // Optionally remove the username if stored
    setToken(null); // Update the parent state to reflect logout
    navigate('/'); // Redirect to the homepage or any other page
  };

  // Render the navigation links. The active link has the "active-link" class.
  // If the user is logged in, show the Logout button. Otherwise, show the Login link.
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