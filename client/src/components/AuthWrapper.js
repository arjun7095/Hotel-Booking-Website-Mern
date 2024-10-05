import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AuthWrapper = () => {
  const token = localStorage.getItem('token');

  // Check if the user is authenticated
  if (!token) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default AuthWrapper;
