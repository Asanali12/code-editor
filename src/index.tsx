import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { makeServer } from './server/mock';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

makeServer({ environment: 'development' });

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
