import { CircularProgress } from "@mui/material";
import React from "react";
import { Redirect, Route, Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
  const { user, admin, isLoading } = useAuth();
  if (isLoading) {
    return <CircularProgress />;
  }
  if (!admin) {
    return (
      <div className="text-center">
        <h2>You don't have any access to visit admin panel</h2>
        <Link to="/dashboard">&#8592; Visit your dashboard</Link>
      </div>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;
