import { call, put, takeEvery } from "redux-saga/effects";
import apiCompanies from "services/api/companies";
// const apiUrl = "https://jsonplaceholder.typicode.com/users";
// apiCompanies.getAll();

// function getApi() {
//   return fetch(apiUrl, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then((response) => response.json())
//     .catch((error) => console.log(error));
// }

function* fetchUsers(action) {
  try {
    const users = yield call(apiCompanies.getAll);
    yield put({ type: "GET_USERS_SUCCESS", users: users });
  } catch (e) {
    yield put({ type: "GET_USERS_FAILED", message: e.message });
  }
}

function* userSaga() {
  yield takeEvery("GET_USERS_REQUESTED", fetchUsers);
}

export default userSaga;
