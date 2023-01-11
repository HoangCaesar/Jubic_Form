import React from 'react';
import ReactDOM from 'react-dom/client';

// Project Import
import App from './App';

// ==============================|| INDEX - REACT DOM RENDER  ||============================== //

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
