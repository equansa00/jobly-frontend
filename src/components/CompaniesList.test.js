// CompaniesList.test.js
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import CompaniesList from './CompaniesList'; // Importing the CompaniesList component
import JoblyApi from '../api/JoblyApi'; // Importing the JoblyApi
jest.mock('../api/JoblyApi'); // Mocking the JoblyApi

/**
 * This test suite is for the CompaniesList component.
 * It uses Jest for the testing framework and @testing-library/react for the testing utilities.
 * The JoblyApi is mocked so that the tests do not make actual API calls.
 */

// Test case: 'renders companies list and fetches data'
// This test checks if the CompaniesList component correctly fetches and displays the companies.
test('renders companies list and fetches data', async () => {
  // Mock the getCompanies method of JoblyApi to return a resolved promise with a list of companies
  JoblyApi.getCompanies.mockResolvedValue([
    { handle: 'company1', name: 'Company 1' },
    { handle: 'company2', name: 'Company 2' },
  ]);

  // Render the CompaniesList component
  const { getByText } = render(<CompaniesList />);

  // Wait for the CompaniesList component to finish fetching and rendering the companies
  // Then check if the companies are correctly displayed in the document
  await waitFor(() => {
    expect(getByText('Company 1')).toBeInTheDocument();
    expect(getByText('Company 2')).toBeInTheDocument();
  });
});