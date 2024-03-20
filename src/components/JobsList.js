// jobly-frontend/src/components/JobsList.js
import React, { useState, useEffect } from 'react';
import JoblyApi from '../api/JoblyApi';
import JobCard from './JobCard';
import './JobsList.css'; 

function JobsList() {
  console.log("Rendering JobsList");

  // State for storing the list of jobs
  const [jobs, setJobs] = useState([]);

  // useEffect hook for fetching the jobs when the component is mounted
  useEffect(() => {
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
    <div className="jobs-list">
      {jobs.length === 0 ? (
        <p>Loading...</p>
      ) : (
        jobs.map(job => <JobCard key={job.id} job={job} />)
      )}
    </div>
  );
}

export default JobsList;
