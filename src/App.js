// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import CompaniesList from './components/CompaniesList';
import JobsList from './components/JobsList';
import LoginForm from './components/LoginForm';
import './App.css';

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
      <div>
        <NavBar />
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/companies" element={<CompaniesList />} />
        <Route path="/jobs" element={<JobsList />} />
        <Route path="/login" element={<LoginForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;