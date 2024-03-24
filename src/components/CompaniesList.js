// src/components/CompaniesList.js
import React, { useState, useEffect } from 'react';
import JoblyApi from '../api/JoblyApi';
import CompanyCard from './CompanyCard';

/**
 * CompaniesList component.
 * This component is responsible for fetching and displaying a list of companies.
 * It uses the JoblyApi to fetch the companies and the CompanyCard component to display each company.
 */
function CompaniesList() {
  // State for storing the list of companies
  const [companies, setCompanies] = useState([]);
  // State for storing any error that occurs when fetching the companies
  const [error, setError] = useState(null);

  // useEffect hook for fetching the companies when the component is mounted
  useEffect(() => {
    async function getCompaniesFromApi() {
      try {
        console.log("Fetching companies from API");
        // Fetch the companies from the API
        const fetchedCompanies = await JoblyApi.getCompanies();
        console.log("Fetched companies:", fetchedCompanies);
        // Update the state with the fetched companies
        setCompanies(fetchedCompanies);
      } catch (err) {
        console.error("Failed to fetch companies:", err);
        // Update the state with the error
        setError(err.toString());
      }
    }
    // Call the function to fetch the companies
    getCompaniesFromApi();
  }, []);

  // If there was an error fetching the companies, display the error
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