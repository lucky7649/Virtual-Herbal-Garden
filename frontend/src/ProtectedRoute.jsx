import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, allowedRoles, userRole, children }) => {
  if (!isAuthenticated) return <Navigate to="/login" />;
  if (!allowedRoles.includes(userRole)) return <Navigate to="/home" />;
  return children;
};

export default ProtectedRoute;
