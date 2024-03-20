// App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

/**
 * This test suite is for the App component.
 * It uses Jest for the testing framework and @testing-library/react for the testing utilities.
 */

// Test case: 'renders the welcome message'
// This test checks if the App component correctly renders the welcome message.
test('renders the welcome message', () => {
  // Render the App component
  render(<App />);
  
  // Check if the welcome message is in the document
  const linkElement = screen.getByText(/Welcome to Jobly/i);
  expect(linkElement).toBeInTheDocument();
});