import {combineReducers} from "redux";

import context from "./reducers/context";

const rootReducer = combineReducers({
  context,
});

export default rootReducer;
