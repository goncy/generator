import {connect} from "dva";

import Jokes from "../components/Jokes/";

const enhancer = connect(({jokes}) => ({jokes}));

export default enhancer(Jokes);
