// Import statements for Router functionalities
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importing components
import HomePage from '../components/HomePage';
import CompaniesList from '../components/CompaniesList';
import CompanyDetail from '../components/CompanyDetail';
import JobsList from '../components/JobsList';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import ProfileForm from '../components/ProfileForm';
import NavBar from '../components/NavBar';

// AppRoutes component setup with Router, Routes, and Route
function AppRoutes() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/companies" element={<CompaniesList />} />
        <Route path="/companies/:handle" element={<CompanyDetail />} />
        <Route path="/jobs" element={<JobsList />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/profile" element={<ProfileForm />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
