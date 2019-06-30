import {fork, all} from "redux-saga/effects";
import {requireAll} from "goncy/utils/discover";

export default function* rootSaga() {
  yield all(
    requireAll(require.context("../", true, /sagas\.js$/))
      .flat()
      .map(saga => fork(saga))
  );
}
