// jobly-frontend/src/components/JobCard.js
import React from 'react';

/**
 * JobCard is a React component that displays the details of a job.
 * It receives a 'job' prop which is an object containing the job's details.
 * Currently, it displays the job's title, company name, salary, and equity.
 * More details can be added in the future.
 * 
 * @param {Object} props - The properties passed to this component.
 * @param {Object} props.job - The job object containing the details of the job.
 * @param {string} props.job.title - The title of the job.
 * @param {string} props.job.companyName - The name of the company offering the job.
 * @param {number} props.job.salary - The salary for the job.
 * @param {number} props.job.equity - The equity for the job.
 * 
 * @returns {JSX.Element} A JSX element representing the job card.
 */
function JobCard({ job }) {
  return (
    <div className="JobCard">
      <h3>{job.title}</h3>
      <p>{job.companyName}</p>
      <ul>
        <li>Salary: {job.salary}</li>
        <li>Equity: {job.equity}</li>
      </ul>
    </div>
  );
}

export default JobCard;