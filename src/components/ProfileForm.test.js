// ProfileForm.test.js
import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import ProfileForm from './ProfileForm';
import JoblyApi from '../api/JoblyApi'; // Importing the JoblyApi

jest.mock('../api/JoblyApi'); // Mocking the JoblyApi

/**
 * This test suite is for the ProfileForm component.
 * It uses Jest for the testing framework and @testing-library/react for the testing utilities.
 * The JoblyApi is mocked so that the tests do not make actual API calls.
 */

// Test case: 'renders form and submits updated data'
// This test checks if the ProfileForm component correctly fetches the user's current profile,
// updates the form data, and submits the updated data.
test('renders form and submits updated data', async () => {
  // Mock the getUser method of JoblyApi to return a resolved promise with the user's current profile
  JoblyApi.getUser.mockResolvedValue({
    username: 'testuser',
    firstName: 'Test',
    lastName: 'User',
    email: 'testuser@test.com',
  });

  // Render the ProfileForm component
  render(<ProfileForm username="testuser" />);

  // Wait for the ProfileForm component to finish fetching the user's current profile
  // Then check if the form inputs are correctly filled with the user's current profile
  await waitFor(() => {
    expect(screen.getByPlaceholderText('First Name')).toHaveValue('Test');
    expect(screen.getByPlaceholderText('Last Name')).toHaveValue('User');
    expect(screen.getByPlaceholderText('Email')).toHaveValue('testuser@test.com');
  });

  // Update the 'firstName' input
  fireEvent.change(screen.getByPlaceholderText('First Name'), { target: { value: 'UpdatedName' } });

  // Mock the updateUser method of JoblyApi to return a resolved promise
  JoblyApi.updateUser.mockResolvedValue();

  // Submit the form
  fireEvent.click(screen.getByText('Save Changes'));

  // Wait for the ProfileForm component to finish submitting the updated data
  // Then check if the updateUser method of JoblyApi is called with the correct arguments
  await waitFor(() => {
    expect(JoblyApi.updateUser).toHaveBeenCalledWith('testuser', {
      username: 'testuser',
      firstName: 'UpdatedName',
      lastName: 'User',
      email: 'testuser@test.com',
    });
  });
});