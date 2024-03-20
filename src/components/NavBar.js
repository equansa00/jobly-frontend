// src/components/NavBar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

/**
 * NavBar is a React component that provides a navigation bar for the application.
 * It uses the NavLink component from react-router-dom to create navigation links.
 * Each NavLink has a 'to' prop which is the path that the link should navigate to.
 * The 'className' prop is used to add the "active-link" class to the active NavLink.
 * Currently, there are links to the home page, companies page, jobs page, and login page.
 * More links can be added in the future.
 * 
 * @returns {JSX.Element} A JSX element representing the navigation bar.
 */
function NavBar() {
    return (
      <div className="navbar">
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? "active-link" : undefined}>
          Home
        </NavLink>
        <NavLink 
          to="/companies" 
          className={({ isActive }) => isActive ? "active-link" : undefined}>
          Companies
        </NavLink>
        <NavLink 
          to="/jobs" 
          className={({ isActive }) => isActive ? "active-link" : undefined}>
          Jobs
        </NavLink>
        <NavLink 
          to="/login" 
          className={({ isActive }) => isActive ? "active-link" : undefined}>
          Login
        </NavLink>
      </div>
    );
}

export default NavBar;
