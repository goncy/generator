import { createStore, compose } from "redux";

import rootReducer from "./reducers";

export default function configureStore() {
  // Redux devtool
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  // Store
  const store = {
    ...createStore(rootReducer, composeEnhancers())
  };
  // Return store
  return store;
}
