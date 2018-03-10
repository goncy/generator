import * as appActions from "../actions/app";

const initialState = {
  loaded: false,
};

const context = (state = initialState, {type}) => {
  switch (type) {
    case appActions.appLoaded.RESOLVED:
      return {
        ...state,
        loaded: true,
      };
    default:
      return state;
  }
};

export default context;
