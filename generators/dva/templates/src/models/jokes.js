import jokesApi from "../services/jokes";

export default {
  namespace: "jokes",
  state: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {
    add(state, action) {
      return {
        ...state,
        list: state.list.concat(action.payload),
      };
    },
    remove(state, action) {
      return {
        ...state,
        list: state.list.filter(joke => joke !== action.payload),
      };
    },
    start(state) {
      return {
        ...state,
        loading: true,
        error: null,
      };
    },
    resolve(state) {
      return {
        ...state,
        loading: false,
      };
    },
    reject(state) {
      return {
        ...state,
        loading: false,
        error: "There was an error fetching the joke",
      };
    },
  },
  effects: {
    *fetch(action, {call, put}) {
      yield put({type: "start"});

      try {
        const {data: joke} = yield call(jokesApi.fetch);

        yield put({type: "resolve"});
        yield put({type: "add", payload: joke.value});
      } catch (e) {
        yield put({type: "reject"});
      }
    },
  },
  subscriptions: {
    setup({history}) {
      history.listen(({pathname}) => {
        if (pathname === "/jokes") {
          console.log("Entered jokes");
        }
      });
    },
  },
};
