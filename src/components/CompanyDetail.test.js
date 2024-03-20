// Assuming CompanyDetail and CompanyDetail.test.js are in the same directory
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CompanyDetail from './CompanyDetail';
import JoblyApi from '../api/JoblyApi'; // Correct the import path
import JobCard from './JobCard';


jest.mock('../api/JoblyApi'); // Correct the path in jest.mock



test('renders company detail and fetches data', async () => {
  JoblyApi.getCompany.mockResolvedValue({
    handle: 'company1',
    name: 'Company 1',
    description: 'Description 1',
    jobs: [{ id: 1, title: 'Job 1' }, { id: 2, title: 'Job 2' }],
  });

  const { getByText } = render(
    <MemoryRouter>
      <CompanyDetail match={{ params: { handle: 'company1' }}} />
    </MemoryRouter>
  );

  await waitFor(() => {
    expect(getByText('Company 1')).toBeInTheDocument();
    expect(getByText('Description 1')).toBeInTheDocument();
    expect(getByText('Job 1')).toBeInTheDocument();
    expect(getByText('Job 2')).toBeInTheDocument();
  });
});
