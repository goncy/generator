import { delay } from "redux-saga"
import { put, take, call } from "redux-saga/effects"

import { appLoaded } from "../actions"

function* initialSaga() {
  yield delay(1000)
  yield put(appLoaded.success())
}

function* initialWatcher() {
  yield take(appLoaded.type)
  yield call(initialSaga)
}

export default [initialWatcher]
