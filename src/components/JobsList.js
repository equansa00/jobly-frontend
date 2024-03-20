// jobly-frontend/src/components/JobsList.js
import React, { useState, useEffect } from 'react';
import JoblyApi from '../api/JoblyApi';
import JobCard from './JobCard';
import './JobsList.css'; 

/**
 * JobsList is a React component that fetches and displays a list of jobs.
 * It uses the JoblyApi to fetch the data and stores it in the 'jobs' state.
 * If there is an error during fetching, it is logged to the console.
 * Each job in the list is displayed using the JobCard component.
 * 
 * @returns {JSX.Element} A JSX element representing the jobs list or a loading message.
 */
function JobsList() {
  // State for storing the list of jobs
  const [jobs, setJobs] = useState([]);

  // useEffect hook for fetching the jobs when the component is mounted
  useEffect(() => {
    // Function for fetching the jobs from the API
    async function getJobs() {
      try {
        const jobsRes = await JoblyApi.getJobs();
        setJobs(jobsRes);
      } catch (err) {
        console.error("Failed to load jobs", err);
        // handle error appropriately in your UI
      }
    }
    getJobs();
  }, []);

  // Render the list of jobs using the JobCard component
  return (
    <div>
      {jobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}

function JobsList({ jobs }) {
  return (
    <ul className="list">
      {jobs.map(job => (
        <li className="list-item" key={job.id}>
          <h2>{job.title}</h2>
          <p>{job.companyName}</p>
          // ... other job details
        </li>
      ))}
    </ul>
  );
}

export default JobsList;