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

function AppRoutes({ setToken }) {
  return (
      <Router>
          <NavBar />
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/companies" element={<CompaniesList />} />
              <Route path="/companies/:handle" element={<CompanyDetail />} />
              <Route path="/jobs" element={<JobsList />} />
              <Route path="/login" element={<LoginForm setToken={setToken} />} />
              <Route path="/profile" element={<ProfileForm />} />
          </Routes>
      </Router>
  );
}

export default AppRoutes;

