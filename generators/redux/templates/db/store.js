import {createStore, compose, applyMiddleware, combineReducers} from "redux";
import {middleware as asyncMiddleware} from "async-action-creator";

import reducers from "./reducers";
import services from "./services";

// Redux devtool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Store
export default createStore(
  combineReducers(reducers),
  composeEnhancers(applyMiddleware(asyncMiddleware(services)))
);
