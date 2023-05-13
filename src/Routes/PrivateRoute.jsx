import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import Spinner from '../Components/Spinner/Spinner';
import { AuthContext } from '../context/AuthProvider';

function PrivateRoute({ children }) {
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <Spinner />;
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login" replace />;
}

export default PrivateRoute;
