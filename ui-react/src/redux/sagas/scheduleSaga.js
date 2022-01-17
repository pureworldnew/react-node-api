import { call, put, takeEvery } from "redux-saga/effects";
import apiSchedules from "services/api/schedules";

function* getSchedules(action) {
  try {
    const schedules = yield call(apiSchedules.getAll);
    yield put({ type: "GET_SCHEDULE_SUCCESS", schedules: schedules });
  } catch (e) {
    yield put({ type: "GET_SCHEDULE_FAILED", message: e.message });
  }
}

function* loadSchedules(action) {
  try {
    const schedules = yield call(apiSchedules.post, action.payload);
    yield put({ type: "LOAD_SCHEDULE_SUCCESS", schedules: schedules });
  } catch (e) {
    yield put({ type: "LOAD_SCHEDULE_FAILED", message: e.message });
  }
}

function* scheduleSaga() {
  yield takeEvery("LOAD_SCHEDULE_REQUESTED", loadSchedules);
  yield takeEvery("GET_SCHEDULE_REQUESTED", getSchedules);
}

export default scheduleSaga;
