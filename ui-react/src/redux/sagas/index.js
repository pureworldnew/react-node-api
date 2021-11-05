import { all } from "redux-saga/effects";
import userSaga from "./userSaga";
import companySaga from "./companySaga";
import recruiterSaga from "./recruiterSaga";

export default function* rootSaga() {
  yield all([userSaga(), companySaga(), recruiterSaga()]);
}
