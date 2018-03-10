import request from "../utils/request";

const URL = "https://api.chucknorris.io/jokes/random";

const jokes = {
  fetch: function() {
    return request(URL);
  },
};

export default jokes;
