import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isAuthenticated = false; // change to true to allow access

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
