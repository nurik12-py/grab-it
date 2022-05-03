import React from "react";
import { Navigate } from "react-router-dom";
import * as auth from "../services/authService";

const ProtectedRoute = ({ children }) => {
  return auth.getJwt() ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
