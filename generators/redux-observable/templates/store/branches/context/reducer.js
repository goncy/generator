import { actions as appActions } from "../../features/app"

const initialState = {
  loaded: false
}

const context = (state = initialState, { type, payload }) => {
  switch (type) {
    case appActions.appLoaded.SUCCESS:
      return {
        ...state,
        loaded: true
      }
    default:
      return state
  }
}

export default context
