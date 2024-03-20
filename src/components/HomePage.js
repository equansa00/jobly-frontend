// src/components/HomePage.js
import React from 'react';
import './HomePage.css';

/**
 * HomePage is a simple React component that displays a welcome message.
 * It does not receive any props or manage any state.
 * It is typically used as the landing page of the application.
 * 
 * @returns {JSX.Element} A JSX element representing the home page.
 */
function HomePage() {
  console.log("Rendering HomePage");
  return (
    <div className="homepage">
      <h1>Welcome to Jobly</h1>
      <p>All the jobs in one, convenient place.</p>
      
    </div>
  );
}

export default HomePage;