import {createStore, compose, applyMiddleware, combineReducers} from "redux";
import {middleware as asyncMiddleware} from "async-action-creator";
import createSagaMiddleware from "redux-saga";

import reducers from "./rootReducer";
import services from "./rootService";
import sagas from "./rootSaga";

// Redux devtool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Sagas
const sagaMiddleware = createSagaMiddleware();

// Store
const store = createStore(
  combineReducers(reducers),
  composeEnhancers(
    applyMiddleware(sagaMiddleware),
    applyMiddleware(asyncMiddleware(services))
  )
);

// Initialize sagas
sagaMiddleware.run(sagas);

// Export store
export default store;
