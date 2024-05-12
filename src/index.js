import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './components/AppRouter/AppRouter';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </React.StrictMode>
);
