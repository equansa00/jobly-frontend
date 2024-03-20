// jobly-frontend/src/components/JobsList.js
import React, { useState, useEffect } from 'react';
import JoblyApi from '../api/JoblyApi';
import JobCard from './JobCard';

function JobsList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function getJobs() {
      try {
        const jobsRes = await JoblyApi.getJobs();
        setJobs(jobsRes);
      } catch (err) {
        console.error("Failed to load jobs", err);
      }
    }
    getJobs();
  }, []);

  return (
    <div>
      {jobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}

export default JobsList;
