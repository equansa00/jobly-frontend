import React from 'react';
import { render, waitFor } from '@testing-library/react';
import JobsList from './JobsList';
import JoblyApi from '../api/JoblyApi';
jest.mock('../api/JoblyApi');

test('renders list of jobs', async () => {
  JoblyApi.getJobs.mockResolvedValue([
    { id: 1, title: "Software Engineer", salary: 120000, equity: "0", companyHandle: "google", companyName: "Google" },
  ]);

  const { getByText } = render(<JobsList />);
  await waitFor(() => {
    expect(getByText("Software Engineer")).toBeInTheDocument();
  });
});
