// SignupForm.test.js
import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react'; 
import SignupForm from './SignupForm';
import JoblyApi from '../api/JoblyApi';

jest.mock('../api/JoblyApi');

/**
 * This test suite is for the SignupForm component.
 * It uses Jest for the testing framework and @testing-library/react for the testing utilities.
 * The JoblyApi is mocked so that the tests do not make actual API calls.
 * The setToken function is also mocked to check if it is called with the correct argument.
 */

// Test case: 'renders form and submits data'
// This test checks if the SignupForm component correctly submits the form data and calls the setToken function.
test('renders form and submits data', async () => {
  // Mock the setToken function
  const setToken = jest.fn();
  
  // Render the SignupForm component
  render(<SignupForm setToken={setToken} />);
  
  // Fill in the form inputs
  fireEvent.change(screen.getByPlaceholderText('Username'), { target: { value: 'testuser' } });
  fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'password' } }); 
  fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'testuser@test.com' } }); 
  
  // Mock the signup method of JoblyApi to return a resolved promise with a fake token
  JoblyApi.signup.mockResolvedValue('fakeToken123');
  
  // Submit the form
  fireEvent.click(screen.getByText(/sign up/i));
  
  // Wait for the SignupForm component to finish submitting the form
  // Then check if the signup method of JoblyApi and the setToken function are called with the correct arguments
  await waitFor(() => {
    expect(JoblyApi.signup).toHaveBeenCalledWith({
      username: 'testuser',
      password: 'password',
      email: 'testuser@test.com',
    });
    expect(setToken).toHaveBeenCalledWith('fakeToken123');
  });
});