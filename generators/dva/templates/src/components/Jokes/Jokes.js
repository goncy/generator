import React from "react";

const Jokes = ({jokes, dispatch}) => (
  <div>
    <h1>Jokes</h1>
    <div>{jokes.list.map((joke, key) => <div key={key}>{joke}</div>)}</div>
    <div>
      <button
        disabled={jokes.loading}
        onClick={() => dispatch({type: "jokes/fetch"})}
      >
        Add joke
      </button>
    </div>
  </div>
);

export default Jokes;
