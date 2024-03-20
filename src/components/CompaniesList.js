// src/components/CompaniesList.js
import React, { useState, useEffect } from 'react';
import JoblyApi from '../api/JoblyApi';
import CompanyCard from './CompanyCard';

function CompaniesList() {
  const [companies, setCompanies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getCompaniesFromApi() {
      try {
        console.log("Fetching companies from API");
        const fetchedCompanies = await JoblyApi.getCompanies();
        console.log("Fetched companies:", fetchedCompanies);
        setCompanies(fetchedCompanies);
      } catch (err) {
        console.error("Failed to fetch companies:", err);
        setError(err.toString());
      }
    }
    getCompaniesFromApi();
  }, []);

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {companies.map(company => (
        <CompanyCard key={company.handle} company={company} />
      ))}
    </div>
  );
}

export default CompaniesList;
