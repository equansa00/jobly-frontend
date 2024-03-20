// jobly-frontend/src/components/CompanyDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import JoblyApi from '../api/JoblyApi';
import JobCard from './JobCard';

/**
 * CompanyDetail is a React component that fetches and displays the details of a specific company.
 * It uses the useParams hook from react-router-dom to get the 'handle' of the company from the URL.
 * It uses the JoblyApi to fetch the company's details and stores them in the 'company' state.
 * If there is an error during fetching, it is logged to the console.
 * Each job of the company is displayed using the JobCard component.
 * 
 * @returns {JSX.Element} A JSX element representing the company details or a loading message.
 */
function CompanyDetail() {
  // Get the 'handle' of the company from the URL
  const { handle } = useParams();

  // State for storing the company's details
  const [company, setCompany] = useState(null);

  // useEffect hook for fetching the company's details when the 'handle' changes
  useEffect(() => {
    // Function for fetching the company's details from the API
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

  // If the company's details are not yet fetched, display a loading message
  if (!company) return <div>Loading...</div>;

  // Render the company's details and its jobs using the JobCard component
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