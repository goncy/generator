import {createStore, applyMiddleware, compose} from "redux";
import {createEpicMiddleware} from "redux-observable";

import rootReducer from "./reducers";
import rootEpic from "./epics";

export default function configureStore() {
  // Epic middleware
  const epicMiddleware = createEpicMiddleware(rootEpic);
  // Redux devtool
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  // Store
  const store = {
    ...createStore(
      rootReducer,
      composeEnhancers(applyMiddleware(epicMiddleware))
    ),
  };
  // Return store
  return store;
}
