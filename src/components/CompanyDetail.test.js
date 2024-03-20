// CompanyDetail.test.js
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CompanyDetail from './CompanyDetail';
import JoblyApi from '../api/JoblyApi'; // Importing the JoblyApi
import JobCard from './JobCard'; // Importing the JobCard component

jest.mock('../api/JoblyApi'); // Mocking the JoblyApi

/**
 * This test suite is for the CompanyDetail component.
 * It uses Jest for the testing framework and @testing-library/react for the testing utilities.
 * The JoblyApi is mocked so that the tests do not make actual API calls.
 * The MemoryRouter from react-router-dom is used to provide the necessary context for the CompanyDetail component.
 */

// Test case: 'renders company detail and fetches data'
// This test checks if the CompanyDetail component correctly fetches and displays the company's details and jobs.
test('renders company detail and fetches data', async () => {
  // Mock the getCompany method of JoblyApi to return a resolved promise with the company's details and jobs
  JoblyApi.getCompany.mockResolvedValue({
    handle: 'company1',
    name: 'Company 1',
    description: 'Description 1',
    jobs: [{ id: 1, title: 'Job 1' }, { id: 2, title: 'Job 2' }],
  });

  // Render the CompanyDetail component inside a MemoryRouter
  // The 'match' prop is provided to simulate the 'handle' parameter in the URL
  const { getByText } = render(
    <MemoryRouter>
      <CompanyDetail match={{ params: { handle: 'company1' }}} />
    </MemoryRouter>
  );

  // Wait for the CompanyDetail component to finish fetching and rendering the company's details and jobs
  // Then check if the company's details and jobs are correctly displayed in the document
  await waitFor(() => {
    expect(getByText('Company 1')).toBeInTheDocument();
    expect(getByText('Description 1')).toBeInTheDocument();
    expect(getByText('Job 1')).toBeInTheDocument();
    expect(getByText('Job 2')).toBeInTheDocument();
  });
});