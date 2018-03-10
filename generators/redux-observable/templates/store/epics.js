import {combineEpics} from "redux-observable";

import app from "./epics/app";

export default combineEpics(app);
