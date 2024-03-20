// Assuming SignupForm and SignupForm.test.js are in the same directory
import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react'; 
import SignupForm from './SignupForm';
import JoblyApi from '../api/JoblyApi';
jest.mock('../api/JoblyApi');

test('renders form and submits data', async () => {
  const setToken = jest.fn();
  
  render(<SignupForm setToken={setToken} />);
  
  fireEvent.change(screen.getByPlaceholderText('Username'), { target: { value: 'testuser' } });
  fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'password' } }); 
  fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'testuser@test.com' } }); 
  
  JoblyApi.signup.mockResolvedValue('fakeToken123');
  
  fireEvent.click(screen.getByText(/sign up/i));
  
  await waitFor(() => {
    expect(JoblyApi.signup).toHaveBeenCalledWith({
      username: 'testuser',
      password: 'password',
      email: 'testuser@test.com',
    });
    expect(setToken).toHaveBeenCalledWith('fakeToken123');
  });
});
