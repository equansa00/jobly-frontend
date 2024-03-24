// src/components/HomePage.js
import React from 'react';
import './HomePage.css';

/**
 * HomePage is a React component that displays a welcome message to the user.
 * It checks if a user is logged in by looking for a token in localStorage.
 * Based on the login state, it displays an appropriate welcome message.
 * 
 * @returns {JSX.Element} A JSX element representing the home page with conditional welcome messages.
 */
function HomePage() {
  const isUserLoggedIn = !!localStorage.getItem('joblyToken');
  const username = localStorage.getItem('username'); // Retrieve the username
  
  return (
      <div className="homepage">
          <h1>Welcome to Jobly</h1>
          {isUserLoggedIn ? (
              <p>Welcome back, {username}! Ready to explore new job opportunities?</p>
          ) : (
              <p>All the jobs in one, convenient place. Please log in or sign up to explore jobs.</p>
          )}
      </div>
  );
}

export default HomePage;
