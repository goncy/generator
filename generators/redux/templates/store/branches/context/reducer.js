import { appLoaded } from "./actions"

const initialState = {
  loaded: false
}

const context = (state = initialState, { type, payload }) => {
  switch (type) {
    case appLoaded.type:
      return {
        ...state,
        loaded: true
      }
    default:
      return state
  }
}

export default context
