import {appLoaded} from "../../actions/app";

const initialEpic = action$ =>
  action$
    .ofType(appLoaded.type)
    .delay(1000)
    .mapTo(appLoaded.resolve());

export default initialEpic;
