import { all, fork } from "redux-saga/effects";

//  ------------------ Admin Api  -----------------------------------
import LoginSaga from "./Login/saga";
import UserSaga from "./User/saga";


export default function* rootSaga() {
  yield all([
    //public
    fork(LoginSaga),
    fork(UserSaga),
    
  ]);
}
