// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import './App.css';
// Import other components

/**
 * App is the root React component of the application.
 * It uses the BrowserRouter (aliased as Router) from react-router-dom to enable routing.
 * Inside the Router, it renders the NavBar component and a set of Routes.
 * Each Route has a 'path' prop which is the URL path, and an 'element' prop which is the React component to render when the path matches.
 * Currently, there is a Route for the home page ('/'), and more Routes can be added for other pages.
 * 
 * @returns {JSX.Element} A JSX element representing the application.
 */
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Define other routes using element prop */}
      </Routes>
    </Router>
  );
}

export default App;