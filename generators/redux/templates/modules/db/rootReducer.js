import {reducer as asyncReducer, REDUCER_NAME} from "async-action-creator";

import {requireAll} from "./utils";

export default Object.assign(
  {},
  {[REDUCER_NAME]: asyncReducer},
  ...requireAll(require.context("../", true, /reducers\.js$/))
);
