Jobly
Jobly is a full-stack job search application where users can explore companies, view job listings, and apply for jobs. Built with React on the frontend and Express/Node.js on the backend, Jobly offers a comprehensive and interactive user experience.

Features
User Authentication: Users can sign up, log in, and log out. Authentication is handled securely with JSON Web Tokens (JWTs).
Company Exploration: Users can browse a list of companies, search for companies by name, and view detailed information about each company, including their job listings.
Job Listings: Users can view a list of all jobs and apply to jobs directly through the application.
Profile Management: Users can view and edit their profile, including their name, email, and password.
Technologies Used
Frontend:
React: A JavaScript library for building user interfaces.
React Router: A collection of navigational components for React applications.
Backend:
Node.js and Express: For building the server-side API.
PostgreSQL: As the database for storing user, company, and job data.
JWT: For handling authentication.
Styling: Custom CSS alongside Bootstrap for responsive design.
Getting Started
Prerequisites
Node.js
npm or yarn
PostgreSQL
Backend Setup
Clone the backend repository from GitHub.
Navigate to the backend directory and install dependencies:


cd jobly-backend
npm install

Create and seed the database:


createdb jobly
psql jobly < data.sql

Start the server:


npm start

Frontend Setup
Clone the frontend repository from GitHub.
Navigate to the frontend directory and install dependencies:


cd jobly-frontend
npm install

Start the React application:


npm start

Your browser should automatically open to http://localhost:3000. If not, manually open this URL in your browser.

Environment Variables
Ensure you have the following environment variables set in your .env file in the frontend project:

REACT_APP_BASE_URL: The URL of your backend API (e.g., http://localhost:3001).

Deployment
For instructions on deploying the Jobly application, please refer to the deployment.md file included in this repository.

Contributing
Contributions are welcome! Please read the CONTRIBUTING.md for how to contribute to this project.

