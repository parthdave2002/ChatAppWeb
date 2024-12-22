import { call, put, takeEvery } from "redux-saga/effects";
import {
  getUserlist,
  getUserlistSuccess,
  getUserlistFail,
} from "./action";
import {  
    GET_USER_LIST,  
    GET_USER_LIST_SUCCESS,  
    GET_USER_LIST_ERROR, 
} from "./actionType";
import {  UserlistApi } from "../../helper/Demo_helper";

function* onGetuserList({ payload: requstuserlist  }) {
  try {
    const reponse = yield call(UserlistApi, requstuserlist);
    yield put(getUserlistSuccess(GET_USER_LIST, reponse));
  } catch (error) {
    yield put(getUserlistFail(error));
  }
}

function* UserSaga() {
  yield takeEvery(GET_USER_LIST, onGetuserList);
}

export default UserSaga;