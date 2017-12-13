import { fork, all } from "redux-saga/effects"
import * as R from "ramda"

import context from "./branches/context"

const branches = [context.sagas]

export default function* rootSaga() {
  const sagas = R.pipe(R.map(R.values), R.flatten, R.map(fork))(branches)
  yield all([...sagas])
}
