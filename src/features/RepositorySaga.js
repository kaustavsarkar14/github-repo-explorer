import axios from "axios";
import { call, put, select, takeEvery, takeLatest } from "redux-saga/effects";
import {
  fetchRepositoriesFailure,
  fetchRepositoriesSuccess,
} from "./RepositorySlice";

function* fetchRepositories() {
  try {
    const page = yield select((state) => state.repository.page);
    const url =
      "https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=" +
      page;
    const response = yield call(axios.get, url);
    yield put(fetchRepositoriesSuccess(response.data.items));
  } catch (error) {
    yield put(fetchRepositoriesFailure(error));
  }
}



function* RepositorySaga() {
  yield takeLatest("repository/fetchRepositoriesStart", fetchRepositories);
  yield takeEvery("repository/increasePage", fetchRepositories);
}

export default RepositorySaga;
