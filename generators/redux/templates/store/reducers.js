import { combineReducers } from "redux"

import context from "./branches/context"

const rootReducer = combineReducers({
  [context.constants.NAMESPACE]: context.reducer
})

export default rootReducer
