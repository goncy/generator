import {connect} from "dva";

import Counter from "../components/Counter/";

const enhancer = connect(({counter}) => ({counter}));

export default enhancer(Counter);
