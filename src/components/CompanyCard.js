// src/components/CompanyCard.js
import React from 'react';

/**
 * CompanyCard is a React component that displays the details of a company.
 * It receives a 'company' prop which is an object containing the company's details.
 * Currently, it displays the company's name and description.
 * More details can be added in the future.
 * 
 * @param {Object} props - The properties passed to this component.
 * @param {Object} props.company - The company object containing the details of the company.
 * @param {string} props.company.name - The name of the company.
 * @param {string} props.company.description - The description of the company.
 * 
 * @returns {JSX.Element} A JSX element representing the company card.
 */
function CompanyCard({ company }) {
  return (
    <div className="company-card">
      <h2>{company.name}</h2>
      <p>{company.description}</p>
    </div>
  );
}

export default CompanyCard;