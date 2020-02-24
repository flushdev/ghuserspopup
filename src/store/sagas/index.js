import { all } from "redux-saga/effects";
import watchGithubUsers from "./github";

export default function* sagas() {
  yield all([watchGithubUsers()]);
}
