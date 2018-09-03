import {createStore, compose, applyMiddleware} from "redux";
import {middleware as asyncMiddleware} from "async-action-creator";

import rootReducer from "./reducers";
import services from "./services";

export default function configureStore() {
  // Redux devtool
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  // Store
  const store = {
    ...createStore(
      rootReducer,
      composeEnhancers(applyMiddleware(asyncMiddleware(services)))
    ),
  };
  // Return store
  return store;
}
