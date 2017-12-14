import { combineEpics } from "redux-observable"
import * as R from "ramda"

import { epics as app } from "./features/app"

const features = [app]
const epics = R.pipe(R.map(R.values), R.flatten)(features)

export default combineEpics(...epics)
