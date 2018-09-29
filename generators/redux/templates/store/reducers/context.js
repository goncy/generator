import {appLoaded} from "../actions/app";

const initialState = {
  loaded: false,
};

const context = (state = initialState, {type}) => {
  switch (type) {
    case appLoaded.RESOLVED:
      return {
        ...state,
        loaded: true,
      };
    default:
      return state;
  }
};

export default context;
