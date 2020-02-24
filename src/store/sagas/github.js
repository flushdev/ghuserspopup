import { takeEvery, call, put } from "redux-saga/effects";
import {
  usersListFetching,
  usersListFetchingSuccess,
  usersListFetchingError,
  usersAdditionalFetchingSuccess,
  usersAdditionalFetchingError
} from "../actions/users";
import { Api } from "../../api/api";

import { createSchema } from "../../api/graphqlSchemas";

function* fetch() {
  try {
    yield call(usersListFetching);
    const data = yield call(Api.getUsers);
    yield put(usersListFetchingSuccess(data));
    const names = data.map(user => user.login);
    const ghUsersDescription = yield call(() => Api.getWithSchema(createSchema(names)));
    yield put(
      usersAdditionalFetchingSuccess(
        Object.keys(ghUsersDescription).map(user => Object.values(ghUsersDescription[user]))
      )
    );
  } catch (error) {
    yield put(usersListFetchingError(error));
  }
}

export default function* watchGithubUsers() {
  yield takeEvery("USERS_LIST_DATA_FETCH", fetch);
}
