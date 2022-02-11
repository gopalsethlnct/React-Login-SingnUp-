import { all, fork } from "redux-saga/effects";
import { UserSaga } from "./LoginSaga";

//watcher saga
export function* rootSaga() {
    yield all([
        fork(UserSaga),
    ]);
}