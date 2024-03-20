// src/components/CompaniesList.js
import React, { useState, useEffect } from 'react';
import JoblyApi from '../api/JoblyApi';
import CompanyCard from './CompanyCard'; // This component displays individual company details

function CompaniesList() {
  const [companies, setCompanies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
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
