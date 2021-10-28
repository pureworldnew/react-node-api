import { call, put, takeEvery } from "redux-saga/effects";
import apiCompanies from "services/api/companies";

function* fetchCompanies(action) {
  try {
    const companies = yield call(apiCompanies.getAll);
    yield put({ type: "GET_COMPANIES_SUCCESS", companies: companies });
  } catch (e) {
    yield put({ type: "GET_COMPANIES_FAILED", message: e.message });
  }
}

function* companySaga() {
  yield takeEvery("GET_COMPANIES_REQUESTED", fetchCompanies);
}

export default companySaga;
