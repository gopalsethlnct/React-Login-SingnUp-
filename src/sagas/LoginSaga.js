import { userApi } from "../apis/UserApi";
import { put, takeLatest } from 'redux-saga/effects'
import { userActionConstants } from "../reduxUser/users/actionTypes";
import { userDataFailure, userDataSuccess } from "../reduxUser/users/action";
function* userSagaFetch(){
    try {
        const res=yield userApi();
        
    yield put(userDataSuccess(res));

    } catch (error) {
        yield put(userDataFailure(error))
    }
}
export function* UserSaga(){
    yield takeLatest(userActionConstants.USER_DATA,userSagaFetch);
}