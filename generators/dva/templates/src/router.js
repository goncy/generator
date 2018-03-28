import React from "react";
import {Router, Route, Switch, NavLink} from "dva/router";

import Index from "./routes/Index";
import Jokes from "./routes/Jokes";

const router = ({history}) => (
  <Router history={history}>
    <div>
      <div>
        <NavLink to="/">Home</NavLink>
        <span> - </span>
        <NavLink to="/jokes">Jokes</NavLink>
      </div>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/jokes" component={Jokes} />
      </Switch>
    </div>
  </Router>
);

export default router;
