import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Fetch runtime configuration from config.json
fetch('/config.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to load config.json');
    }
    return response.json();
  })
  .then(config => {
    // Store config globally (or use your own state management)
    window.runtimeConfig = config;

    // Render the app after config is loaded
    const container = document.getElementById('root');
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  })
  .catch(error => {
    console.error('Error loading configuration:', error);
    
    // Optionally render the app with default configuration
    const container = document.getElementById('root');
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  });

// Start measuring performance in your app
reportWebVitals();
