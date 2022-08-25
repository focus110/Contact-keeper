import React, { useContext } from "react";
import { Navigate } from "react-router";
import AuthContext from "../../context/auth/authContext";

const ProtectedRoute = ({ user, children }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loading } = authContext;

  if (!isAuthenticated && !loading) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
