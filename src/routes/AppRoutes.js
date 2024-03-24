// src/routes/AppRoutes.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../components/HomePage';
import CompaniesList from '../components/CompaniesList';
import CompanyDetail from '../components/CompanyDetail';
import JobsList from '../components/JobsList';
import LoginForm from '../components/LoginForm';
import ProfileForm from '../components/ProfileForm';
import NavBar from '../components/NavBar';

/**
 * AppRoutes component.
 * This component is responsible for defining the routes of the application.
 * It uses react-router-dom to define the routes.
 * @param {function} setToken - Function to set the authentication token.
 */
function AppRoutes({ setToken }) {
  return (
      <Router>
          <NavBar /> {/* Navigation bar component */}
          <Routes>
              {/* Home page route */}
              <Route path="/" element={<HomePage />} />
              {/* Companies list route */}
              <Route path="/companies" element={<CompaniesList />} />
              {/* Company detail route, :handle is a URL parameter */}
              <Route path="/companies/:handle" element={<CompanyDetail />} />
              {/* Jobs list route */}
              <Route path="/jobs" element={<JobsList />} />
              {/* Login form route, setToken function is passed as a prop */}
              <Route path="/login" element={<LoginForm setToken={setToken} />} />
              {/* Profile form route */}
              <Route path="/profile" element={<ProfileForm />} />
          </Routes>
      </Router>
  );
}

export default AppRoutes;