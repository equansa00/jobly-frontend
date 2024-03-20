// LoginForm.test.js
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import LoginForm from './LoginForm';
import JoblyApi from '../api/JoblyApi'; // Importing the JoblyApi

jest.mock('../api/JoblyApi'); // Mocking the JoblyApi

/**
 * This test suite is for the LoginForm component.
 * It uses Jest for the testing framework and @testing-library/react for the testing utilities.
 * The JoblyApi is mocked so that the tests do not make actual API calls.
 * The setToken function is also mocked to check if it is called with the correct argument.
 */

// Test case: 'renders form and submits data'
// This test checks if the LoginForm component correctly submits the form data and calls the setToken function.
test('renders form and submits data', async () => {
  // Mock the setToken function
  const setToken = jest.fn();

  // Render the LoginForm component
  const { getByPlaceholderText, getByText } = render(<LoginForm setToken={setToken} />);

  // Fill in the form inputs
  fireEvent.change(getByPlaceholderText('Username'), { target: { value: 'testuser' } });
  fireEvent.change(getByPlaceholderText('Password'), { target: { value: 'password' } });

  // Mock the login method of JoblyApi to return a resolved promise with a fake token
  JoblyApi.login.mockResolvedValue('fakeToken123');

  // Submit the form
  fireEvent.click(getByText('Log In'));

  // Wait for the LoginForm component to finish submitting the form
  // Then check if the login method of JoblyApi and the setToken function are called with the correct arguments
  await waitFor(() => {
    expect(JoblyApi.login).toHaveBeenCalledWith({
      username: 'testuser',
      password: 'password',
    });
    expect(setToken).toHaveBeenCalledWith('fakeToken123');
  });
});