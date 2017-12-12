import { fork, all } from "redux-saga/effects"
import * as R from "ramda"

import * as context from "./branches/context/sagas"

const branches = [context]

export default function*() {
  const sagas = R.pipe(R.map(R.values), R.flatten, R.map(fork))(branches)
  yield all([...sagas])
}
