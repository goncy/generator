import {createStore, compose, applyMiddleware, combineReducers} from "redux";
import {middleware as asyncMiddleware} from "async-action-creator";

import reducers from "./rootReducer";
import services from "./rootService";

// Redux devtool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Store
const store = createStore(
  combineReducers(reducers),
  composeEnhancers(applyMiddleware(asyncMiddleware(services)))
);

// Export store
export default store;
