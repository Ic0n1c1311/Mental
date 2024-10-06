import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("jwtToken"); // Get token from localStorage

  // If token exists, return children (protected routes), otherwise redirect to login
  return token ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
