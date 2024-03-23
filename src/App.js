// src/App.js
import React, { useState, useEffect } from 'react';
import AppRoutes from './routes/AppRoutes'; // Import AppRoutes
import JoblyApi from './api/JoblyApi'; // Ensure this path is correct
import './App.css';

const App = () => {
  const [token, setToken] = useState();

  useEffect(() => {
    const storedToken = localStorage.getItem('joblyToken');
    if (storedToken) {
      JoblyApi.setToken(storedToken); // Ensure JoblyApi is updated with the stored token
      setToken(storedToken);
    }
  }, []);

  const handleSetToken = (newToken) => {
    localStorage.setItem('joblyToken', newToken);
    JoblyApi.setToken(newToken); // Update the JoblyApi token
    setToken(newToken);
  };

  return (
    <AppRoutes setToken={handleSetToken} /> // Pass setToken down to AppRoutes
  );
};

export default App;
