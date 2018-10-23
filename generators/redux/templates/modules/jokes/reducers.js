import {joke} from "./actions";

const initialState = {
  jokes: {
    list: [],
  },
};

export default {
  jokes: (state = initialState.jokes, action) => {
    switch (action.type) {
      case joke.RESOLVED: {
        return {
          ...state,
          list: state.list.concat(action.payload),
        };
      }
      default:
        return state;
    }
  },
};
