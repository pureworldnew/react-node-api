import { all } from "redux-saga/effects";
import userSaga from "./userSaga";
import companySaga from "./companySaga";

export default function* rootSaga() {
  yield all([userSaga(), companySaga()]);
}
