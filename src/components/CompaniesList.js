// src/components/CompaniesList.js
import React, { useState, useEffect } from 'react';
import JoblyApi from '../api/JoblyApi';
import CompanyCard from './CompanyCard'; // This component displays individual company details

/**
 * CompaniesList is a React component that fetches and displays a list of companies.
 * It uses the JoblyApi to fetch the data and stores it in the 'companies' state.
 * If there is an error during fetching, it is stored in the 'error' state and displayed to the user.
 * Each company in the list is displayed using the CompanyCard component.
 */
function CompaniesList() {
  // State for storing the list of companies
  const [companies, setCompanies] = useState([]);

  // State for storing any error that occurs during fetching
  const [error, setError] = useState(null);

  // useEffect hook for fetching the companies when the component is mounted
  useEffect(() => {
    // Function for fetching the companies from the API
    async function getCompaniesFromApi() {
      try {
        const fetchedCompanies = await JoblyApi.getCompanies();
        setCompanies(fetchedCompanies);
      } catch (err) {
        setError(err.toString());
      }
    }
    getCompaniesFromApi();
  }, []);

  // If there is an error, display it
  if (error) return <div>Error: {error}</div>;

  // Render the list of companies using the CompanyCard component
  return (
    <div>
      {companies.map(company => (
        <CompanyCard key={company.handle} company={company} />
      ))}
    </div>
  );
}

export default CompaniesList;