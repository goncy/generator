import { combineReducers } from "redux"

import * as context from "./branches/context"

const rootReducer = combineReducers({
  [context.constants.NAMESPACE]: context.reducer
})

export default rootReducer
