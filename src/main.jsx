import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './composants/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <React.Suspense fallback={<div>Loading...</div>}>
      <App />
    </React.Suspense>
  </React.StrictMode>,
);