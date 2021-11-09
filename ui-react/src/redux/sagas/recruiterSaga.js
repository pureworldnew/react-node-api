import { call, put, takeEvery } from "redux-saga/effects";
import apiRecruiters from "services/api/recruiters";

function* loadRecruiters(action) {
  try {
    yield call(apiRecruiters.load);
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

function* recruiterSaga() {
  yield takeEvery("LOAD_RECRUITERS_REQUESTED", loadRecruiters);
  yield takeEvery("GET_RECRUITERS_REQUESTED", getRecruiters);
}

export default recruiterSaga;
