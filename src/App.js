// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
