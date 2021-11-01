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

function* addCompany(action) {
  try {
    const company = yield call(apiCompanies.post, action.payload);
    yield put({ type: "ADD_COMPANY_SUCCESS", company: company });
  } catch (e) {
    yield put({ type: "ADD_COMPANY_FAILED", message: e.message });
  }
}

function* companySaga() {
  yield takeEvery("GET_COMPANIES_REQUESTED", fetchCompanies);
  yield takeEvery("ADD_COMPANY_REQUESTED", addCompany);
}

export default companySaga;
