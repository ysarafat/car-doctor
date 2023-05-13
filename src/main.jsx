import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import route from './Routes/Routes';
import AuthProvider from './context/AuthProvider';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={route} />
        </AuthProvider>
    </React.StrictMode>
);
