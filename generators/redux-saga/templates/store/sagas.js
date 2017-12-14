import { fork, all } from "redux-saga/effects"
import * as R from "ramda"

import { sagas as app } from "./features/sagas"

const features = [app]
const sagas = R.pipe(R.map(R.values), R.flatten, R.map(fork))(features)

export default function* rootSaga() {
  yield all([...sagas])
}
