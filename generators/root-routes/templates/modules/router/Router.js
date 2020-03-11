import {Switch, Route, Redirect} from "react-router-dom";

import routes from "./rootRoutes"

const Router = () => {
  return (
    <Switch>
      {Object.entries(routes).map(([path, _props]) => (
        <Route
          key={path}
          exact
          path={path}
        />
      ))}
      <Redirect to="/oportunidades" />
    </Switch>
  );

  export default Router
