import { store } from "@/store";
import React from "react";
import { useSelector } from "react-redux";

function PrivateRoute({ children }) {
  const isAuthenticated = useSelector((store) => store.auth.isAuthenticated);
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default PrivateRoute;
