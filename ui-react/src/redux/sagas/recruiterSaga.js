import { call, put, takeEvery } from "redux-saga/effects";
import apiRecruiters from "services/api/recruiters";

function* loadRecruiters(action) {
  try {
    yield call(apiRecruiters.load, action.payload);
    console.log("action.payload", action.payload);
    const recruiters = yield call(apiRecruiters.getAll);
    yield put({ type: "GET_RECRUITERS_SUCCESS", recruiters: recruiters });
  } catch (e) {
    yield put({ type: "LOAD_RECRUITERS_FAILED", message: e.message });
  }
}

function* getRecruiters(action) {
  try {
    const recruiters = yield call(apiRecruiters.getAll);
    yield put({ type: "GET_RECRUITERS_SUCCESS", recruiters: recruiters });
  } catch (e) {
    yield put({ type: "GET_RECRUITERS_FAILED", message: e.message });
  }
}

function* removeAllRecruiters(action) {
  try {
    yield call(apiRecruiters.remove, action.payload);
    const recruiters = yield call(apiRecruiters.getAll);
    yield put({ type: "GET_RECRUITERS_SUCCESS", recruiters: recruiters });
  } catch (e) {
    yield put({ type: "REMOVE_ALL_RECRUITERS_FAILED", message: e.message });
  }
}

function* recruiterSaga() {
  yield takeEvery("LOAD_RECRUITERS_REQUESTED", loadRecruiters);
  yield takeEvery("GET_RECRUITERS_REQUESTED", getRecruiters);
  yield takeEvery("REMOVE_ALL_RECRUITERS_REQUESTED", removeAllRecruiters);
}

export default recruiterSaga;
