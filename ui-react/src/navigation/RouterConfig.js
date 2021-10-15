import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "pages/Home";
import Dashboard from "pages/Dashboard";
import { NotFound } from "navigation/NotFound";
import {
  ROOT,
  DASHBOARD,
  PAGE1,
  AUTH_PAGE1,
  SCHEDULE,
  COMPANY,
  TECHNICAL,
  FINAL,
  OFFER,
  PROJECT,
} from "navigation/CONSTANTS";
import { Page1 } from "pages/Page1";
import Login from "./Auth/Login";
import { AuthorizedPage1 } from "pages/AuthorizedPage1";
import PrivateRoute from "./Auth/PrivateRoute";
import { Schedule } from "pages/Schedule";
import { Company } from "pages/Company";
import { Technical } from "pages/Technical";
import { Final } from "pages/Final";
import { Offer } from "pages/Offer";
import { Project } from "pages/Project";

export const RouterConfig = () => {
  return (
    <div>
      <Switch>
        {/* List all public routes here */}
        <Route exact path={ROOT} component={Home} />
        <Route exact path={DASHBOARD} component={Dashboard} />
        <Route exact path={PAGE1} component={Page1} />
        <Route exact path={SCHEDULE} component={Schedule} />
        <Route exact path={COMPANY} component={Company} />
        <Route exact path={TECHNICAL} component={Technical} />
        <Route exact path={FINAL} component={Final} />
        <Route exact path={OFFER} component={Offer} />
        <Route exact path={PROJECT} component={Project} />
        <Route path="/login">
          <Login />
        </Route>

        {/* List all private/auth routes here */}
        <PrivateRoute path={AUTH_PAGE1}>
          <AuthorizedPage1 />
        </PrivateRoute>
        {/* Do not hesitate to play around by moving some routes from public to private and vice-versa */}
        {/* <PrivateRoute path={DASHBOARD}>
          <Dashboard />
        </PrivateRoute> */}

        {/* List a generic 404-Not Found route here */}
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
};
