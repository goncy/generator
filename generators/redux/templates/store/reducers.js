import {combineReducers} from "redux";
import {reducer as asyncReducer, REDUCER_NAME} from "async-action-creator";

import context from "./reducers/context";

const rootReducer = combineReducers({
  context,
  [REDUCER_NAME]: asyncReducer,
});

export default rootReducer;
