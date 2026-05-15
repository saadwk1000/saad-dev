import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../../shared/redux";
import { RouteConstant } from "./routeConstant";

interface ProtectedRouteProps {
  children: React.ReactElement;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { token } = useAppSelector((state) => state.auth);
  const location = useLocation();

  const sessionToken = sessionStorage.getItem("token");

  const ghostToken = localStorage.getItem("token");

  if (!token && !sessionToken) {
    return (
      <Navigate
        to={RouteConstant.login.path}
        state={{ from: location }}
        replace
      />
    );
  }

  if (ghostToken && !sessionToken) {
    localStorage.removeItem("token");
    return <Navigate to={RouteConstant.login.path} replace />;
  }

  return children;
};
