// jobly-frontend/src/components/CompanyDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import JoblyApi from '../api/JoblyApi';
import JobCard from './JobCard';

function CompanyDetail() {
  const { handle } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(() => {
    async function getCompany() {
      try {
        const companyRes = await JoblyApi.getCompany(handle);
        setCompany(companyRes);
      } catch (err) {
        console.error("Failed to load company", err);
        // handle error appropriately in your UI
      }
    }
    getCompany();
  }, [handle]);

  if (!company) return <div>Loading...</div>;

  return (
    <div>
      <h2>{company.name}</h2>
      <p>{company.description}</p>
      <div>
        {company.jobs.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}

export default CompanyDetail;
