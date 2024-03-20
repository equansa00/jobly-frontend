import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import ProfileForm from './ProfileForm';
import JoblyApi from '../api/JoblyApi';

jest.mock('../api/JoblyApi');

test('renders form and submits updated data', async () => {
  JoblyApi.getUser.mockResolvedValue({
    username: 'testuser',
    firstName: 'Test',
    lastName: 'User',
    email: 'testuser@test.com',
  });

  render(<ProfileForm username="testuser" />);

  await waitFor(() => {
    expect(screen.getByPlaceholderText('First Name')).toHaveValue('Test');
    expect(screen.getByPlaceholderText('Last Name')).toHaveValue('User');
    expect(screen.getByPlaceholderText('Email')).toHaveValue('testuser@test.com');
  });

  fireEvent.change(screen.getByPlaceholderText('First Name'), { target: { value: 'UpdatedName' } });

  JoblyApi.updateUser.mockResolvedValue();

  fireEvent.click(screen.getByText('Save Changes'));

  await waitFor(() => {
    expect(JoblyApi.updateUser).toHaveBeenCalledWith('testuser', {
      username: 'testuser',
      firstName: 'UpdatedName',
      lastName: 'User',
      email: 'testuser@test.com',
    });
  });
});
