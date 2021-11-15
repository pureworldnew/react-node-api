import React, { lazy } from "react";
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
  RECRUITER,
  TECHNICAL,
  FINAL,
  OFFER,
  PROJECT,
} from "navigation/CONSTANTS";
import { Page1 } from "pages/Page1";
import Login from "./Auth/Login";
import { AuthorizedPage1 } from "pages/AuthorizedPage1";
import PrivateRoute from "./Auth/PrivateRoute";
import SuspenseContainer from "components/SuspenseContainer";

const Company = lazy(() => import("pages/Company"));
const Schedule = lazy(() => import("pages/Schedule"));
const Recruiter = lazy(() => import("pages/Recruiter"));
const Technical = lazy(() => import("pages/Technical"));
const Final = lazy(() => import("pages/Final"));
const Offer = lazy(() => import("pages/Offer"));
const Project = lazy(() => import("pages/Project"));

export const RouterConfig = () => {
  return (
    <div>
      <Switch>
        {/* List all public routes here */}
        <Route exact path={ROOT} component={Home} />
        <Route exact path={DASHBOARD} component={Dashboard} />
        <Route exact path={PAGE1} component={Page1} />

        <Route exact path={COMPANY}>
          <SuspenseContainer>
            <Company />
          </SuspenseContainer>
        </Route>
        <Route exact path={SCHEDULE}>
          <SuspenseContainer>
            <Schedule />
          </SuspenseContainer>
        </Route>
        <Route exact path={RECRUITER}>
          <SuspenseContainer>
            <Recruiter />
          </SuspenseContainer>
        </Route>
        <Route exact path={TECHNICAL}>
          <SuspenseContainer>
            <Technical />
          </SuspenseContainer>
        </Route>
        <Route exact path={FINAL}>
          <SuspenseContainer>
            <Final />
          </SuspenseContainer>
        </Route>
        <Route exact path={OFFER}>
          <SuspenseContainer>
            <Offer />
          </SuspenseContainer>
        </Route>
        <Route exact path={PROJECT}>
          <SuspenseContainer>
            <Project />
          </SuspenseContainer>
        </Route>

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
