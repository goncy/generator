import {appLoaded} from "./actions/app";

export default {
  [appLoaded.TYPE]: {
    uri: "https://api.chucknorris.io/jokes/random",
    method: "GET",
    selector: result => result.value,
  },
};
