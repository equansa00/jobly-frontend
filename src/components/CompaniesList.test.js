// Assuming CompaniesList and CompaniesList.test.js are in the same directory
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import CompaniesList from './CompaniesList'; // Correct relative path
import JoblyApi from '../api/JoblyApi'; // Correct the import path
jest.mock('../api/JoblyApi'); // Correct the path in jest.mock

test('renders companies list and fetches data', async () => {
  JoblyApi.getCompanies.mockResolvedValue([
    { handle: 'company1', name: 'Company 1' },
    { handle: 'company2', name: 'Company 2' },
  ]);

  const { getByText } = render(<CompaniesList />);
  await waitFor(() => {
    expect(getByText('Company 1')).toBeInTheDocument();
    expect(getByText('Company 2')).toBeInTheDocument();
  });
});
