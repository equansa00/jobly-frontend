//jobly-frontend/src/components/JobCard.js
import React from 'react';

function JobCard({ job }) {
  return (
    <div className="JobCard">
      <h3>{job.title}</h3>
      <p>{job.companyName}</p>
      <ul>
        <li>Salary: {job.salary}</li>
        <li>Equity: {job.equity}</li>
      </ul>
      {/* Include any additional job details you wish to display */}
    </div>
  );
}

export default JobCard;
