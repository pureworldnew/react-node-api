// A wrapper for <Route> that redirects to the login

import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "./ProvideAuth";

// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  console.log("auth.user is ", auth.user);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          <>
            {children}
            <br />
            <div>This is a protected route</div>
          </>
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
export default PrivateRoute;
