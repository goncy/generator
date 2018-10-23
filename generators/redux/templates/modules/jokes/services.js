import {joke} from "./actions";

export default {
  [joke.FETCH]: {
    action: joke,
    uri: "https://api.chucknorris.io/jokes/random",
    method: "GET",
    onResolve: result => result.value,
  },
};
