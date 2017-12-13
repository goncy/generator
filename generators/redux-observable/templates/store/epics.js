import { combineEpics } from "redux-observable"
import * as R from "ramda"

import context from "./branches/context"

const branches = [context.epics]
const epics = R.pipe(R.map(R.values), R.flatten)(branches)

export default combineEpics(...epics)
