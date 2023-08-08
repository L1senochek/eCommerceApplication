import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/app/app';
import './index.scss';

const root = document.getElementById('root');

root &&
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
