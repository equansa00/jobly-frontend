// src/components/NavBar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

/**
 * NavBar is a React component that provides a navigation bar for the application.
 * It uses the NavLink component from react-router-dom to create navigation links.
 * Each NavLink has a 'to' prop which is the path that the link should navigate to.
 * Currently, there are links to the home page, companies page, jobs page, and login page.
 * More links can be added in the future.
 * 
 * @returns {JSX.Element} A JSX element representing the navigation bar.
 */
function NavBar() {
    return (
      <div className="navbar">
        <NavLink to="/" activeClassName="active-link">Home</NavLink>
        <NavLink to="/companies" activeClassName="active-link">Companies</NavLink>
        <NavLink to="/jobs" activeClassName="active-link">Jobs</NavLink>
        <NavLink to="/login" activeClassName="active-link">Login</NavLink>
        // ... other links
      </div>
    );
  }
  
  export default NavBar;