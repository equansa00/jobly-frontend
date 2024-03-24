// jobly-frontend/src/components/JobsList.js
import React, { useState, useEffect } from 'react';
import JoblyApi from '../api/JoblyApi';
import JobCard from './JobCard';
import './JobsList.css'; 

/**
 * JobsList component.
 * This component is responsible for fetching and displaying a list of jobs.
 * It uses the JoblyApi to fetch the jobs and the JobCard component to display each job.
 */
function JobsList() {
  console.log("Rendering JobsList");

  // State for storing the list of jobs
  const [jobs, setJobs] = useState([]);

  // useEffect hook for fetching the jobs when the component is mounted
  useEffect(() => {
    async function getJobs() {
      try {
        // Fetch the jobs from the API
        const jobsRes = await JoblyApi.getJobs();
        // Update the state with the fetched jobs
        setJobs(jobsRes);
      } catch (err) {
        console.error("Failed to load jobs", err);
        // handle error appropriately in your UI
      }
    }
    // Call the function to fetch the jobs
    getJobs();
  }, []);

  // Render the list of jobs using the JobCard component
  // If the jobs are not yet loaded, display a loading message
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