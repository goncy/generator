import {fork, all} from "redux-saga/effects";
import * as R from "ramda";

import app from "./sagas/app/";

const flattenSagas = R.pipe(R.flatten, R.map(fork), all);

const sagas = [app];

export default function* rootSaga() {
  yield flattenSagas(sagas);
}
