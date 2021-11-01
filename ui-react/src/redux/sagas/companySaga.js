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
    console.log("added company", company);
    const companies = yield call(apiCompanies.getAll);
    yield put({ type: "ADD_COMPANY_SUCCESS", companies: companies });
  } catch (e) {
    yield put({ type: "ADD_COMPANY_FAILED", message: e.message });
  }
}

function* updateCompany(action) {
  console.log("update action", action);
  try {
    const company = yield call(
      apiCompanies.put,
      action.payload.id,
      action.payload.data
    );
    console.log("updated company", company);
    const companies = yield call(apiCompanies.getAll);
    yield put({ type: "UPDATE_COMPANY_SUCCESS", companies: companies });
  } catch (e) {
    yield put({ type: "UPDATE_COMPANY_FAILED", message: e.message });
  }
}

function* removeCompany(action) {
  try {
    const del = yield call(apiCompanies.remove, action.payload);
    const companies = yield call(apiCompanies.getAll);
    yield put({ type: "REMOVE_COMPANY_SUCCESS", companies: companies });
  } catch (e) {
    yield put({ type: "REMOVE_COMPANY_FAILED", message: e.message });
  }
}

function* getSingleCompany(action) {
  try {
    const company = yield call(apiCompanies.getSingle, action.payload);
    yield put({ type: "GET_SINGLE_COMPANY_SUCCESS", company: company });
  } catch (e) {
    yield put({ type: "GET_SINGLE_COMPANY_FAILED", message: e.message });
  }
}

function* companySaga() {
  yield takeEvery("GET_COMPANIES_REQUESTED", fetchCompanies);
  yield takeEvery("ADD_COMPANY_REQUESTED", addCompany);
  yield takeEvery("UPDATE_COMPANY_REQUESTED", updateCompany);
  yield takeEvery("REMOVE_COMPANY_REQUESTED", removeCompany);
  yield takeEvery("GET_SINGLE_COMPANY", getSingleCompany);
}

export default companySaga;
