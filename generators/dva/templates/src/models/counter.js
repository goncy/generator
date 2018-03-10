import key from "keymaster";

import delay from "../utils/delay";

export default {
  namespace: "counter",
  state: {
    record: 0,
    current: 0,
  },
  reducers: {
    add(state) {
      const newCurrent = state.current + 1;
      return {
        ...state,
        record: newCurrent > state.record ? newCurrent : state.record,
        current: newCurrent,
      };
    },
    minus(state) {
      return {...state, current: state.current - 1};
    },
  },
  effects: {
    *count(action, {call, put}) {
      yield put({type: "add"});
      yield call(delay, 1000);
      yield put({type: "minus"});
    },
  },
  subscriptions: {
    keyboardWatcher({dispatch}) {
      key("⌘+up, ctrl+up", () => {
        dispatch({type: "count"});
      });
    },
  },
};
