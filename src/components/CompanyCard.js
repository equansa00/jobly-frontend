// src/components/CompanyCard.js
import React from 'react';

function CompanyCard({ company }) {
  return (
    <div className="company-card">
      <h2>{company.name}</h2>
      <p>{company.description}</p>
      {/* Add more company details here */}
    </div>
  );
}

export default CompanyCard;
