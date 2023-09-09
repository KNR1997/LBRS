import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CombinedProvider from './context/CombineProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CombinedProvider>
      <App />
    </CombinedProvider>
  </React.StrictMode>
);
