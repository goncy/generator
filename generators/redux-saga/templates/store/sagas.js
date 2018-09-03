import {fork, all} from "redux-saga/effects";
import * as R from "ramda";

import initial from "./sagas/initial";

const flattenSagas = R.pipe(R.flatten, R.map(fork), all);

const sagas = [initial];

export default function* rootSaga() {
  yield flattenSagas(sagas);
}
