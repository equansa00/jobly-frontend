// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/companies">Companies</NavLink>
        <NavLink to="/jobs">Jobs</NavLink>
        <NavLink to="/login">Login</NavLink>
        {/* Add more links as needed */}
      </nav>
    );
  }
  
  export default NavBar;