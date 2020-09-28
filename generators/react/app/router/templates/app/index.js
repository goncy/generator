import React from "react";
import {BrowserRouter} from "react-router-dom";

import Routes from "./routes";

import "./theme.css";

const App = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

export default App;
