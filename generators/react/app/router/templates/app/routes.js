import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";

import {requireAll} from "../utils/module";

const routes = Object.assign({}, ...requireAll(require.context("../", true, /routes\.js$/)));

const Routes = () => (
  <Switch>
    {Object.entries(routes).map(([path, props]) => (
      <Route key={path} exact path={path} {...props} />
    ))}
    <Redirect to="/" />
  </Switch>
);

export default Routes;
