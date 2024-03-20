// JobsList.test.js
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import JobsList from './JobsList';
import JoblyApi from '../api/JoblyApi'; // Importing the JoblyApi
jest.mock('../api/JoblyApi'); // Mocking the JoblyApi

/**
 * This test suite is for the JobsList component.
 * It uses Jest for the testing framework and @testing-library/react for the testing utilities.
 * The JoblyApi is mocked so that the tests do not make actual API calls.
 */

// Test case: 'renders list of jobs'
// This test checks if the JobsList component correctly fetches and displays the jobs.
test('renders list of jobs', async () => {
  // Mock the getJobs method of JoblyApi to return a resolved promise with a list of jobs
  JoblyApi.getJobs.mockResolvedValue([
    { id: 1, title: "Software Engineer", salary: 120000, equity: "0", companyHandle: "google", companyName: "Google" },
  ]);

  // Render the JobsList component
  const { getByText } = render(<JobsList />);

  // Wait for the JobsList component to finish fetching and rendering the jobs
  // Then check if the jobs are correctly displayed in the document
  await waitFor(() => {
    expect(getByText("Software Engineer")).toBeInTheDocument();
  });
});