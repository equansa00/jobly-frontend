// src/App.js
import React, { useEffect } from 'react';
import AppRoutes from './routes/AppRoutes'; // Import AppRoutes
import JoblyApi from './api/JoblyApi'; // Import JoblyApi
import './App.css';

/**
 * The main App component.
 * This component is responsible for initializing the JoblyApi token from local storage on app start.
 */
const App = () => {
  // Effect hook to retrieve the token from local storage on component mount
  useEffect(() => {
    const storedToken = localStorage.getItem('joblyToken');
    if (storedToken) {
      JoblyApi.setToken(storedToken); // Update the JoblyApi with the stored token
    }
  }, []);

  /**
   * Function to handle setting the token.
   * This function updates the token in local storage and the JoblyApi.
   * @param {string} newToken - The new token to set.
   */
  const handleSetToken = (newToken) => {
    localStorage.setItem('joblyToken', newToken); // Update the token in local storage
    JoblyApi.setToken(newToken); // Update the token in the JoblyApi
  };

  // Render the AppRoutes component, passing down the handleSetToken function as a prop
  return (
    <AppRoutes setToken={handleSetToken} />
  );
};

export default App;
