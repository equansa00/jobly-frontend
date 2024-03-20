import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import LoginForm from './LoginForm';
import JoblyApi from '../api/JoblyApi'; // Make sure this path is correct

jest.mock('../api/JoblyApi');

test('renders form and submits data', async () => {
  const setToken = jest.fn();
  const { getByPlaceholderText, getByText } = render(<LoginForm setToken={setToken} />);

  fireEvent.change(getByPlaceholderText('Username'), { target: { value: 'testuser' } });
  fireEvent.change(getByPlaceholderText('Password'), { target: { value: 'password' } });

  JoblyApi.login.mockResolvedValue('fakeToken123');

  fireEvent.click(getByText('Log In'));

  await waitFor(() => {
    expect(JoblyApi.login).toHaveBeenCalledWith({
      username: 'testuser',
      password: 'password',
    });
    expect(setToken).toHaveBeenCalledWith('fakeToken123');
  });
});
