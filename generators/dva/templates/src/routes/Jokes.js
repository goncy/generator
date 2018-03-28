import {connect} from "dva";

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

const enhancer = connect(({jokes}) => ({jokes}));

export default enhancer(Jokes);
