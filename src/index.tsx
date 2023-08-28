import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/app/app';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';

const root = document.getElementById('root');

root &&
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
