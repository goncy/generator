import {delay} from "redux-saga";
import {put, take, call} from "redux-saga/effects";

import {appLoaded} from "../actions/app";

function* initialSaga() {
  yield delay(1000);
  yield put(appLoaded.resolve());
}

function* initialWatcher() {
  yield take(appLoaded.TYPE);
  yield call(initialSaga);
}

export default [initialWatcher];
