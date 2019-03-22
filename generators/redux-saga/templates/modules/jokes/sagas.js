import {put, takeEvery} from "redux-saga/effects";

import {joke} from "./actions";

function* initWatcher() {
  yield takeEvery(joke.TYPE, function* initWorker() {
    yield put(joke.start());
  });
}

export default [initWatcher];
