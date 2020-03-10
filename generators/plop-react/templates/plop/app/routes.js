import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";

const Routes = () => (
  <Switch>
    <Route exact path="/" render={() => <span>Hello world!</span>} />
    <Redirect to="/" />
  </Switch>
);

export default Routes;
