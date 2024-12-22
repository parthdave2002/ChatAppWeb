import {
    GET_USER_LIST,
    GET_USER_LIST_SUCCESS,
    GET_USER_LIST_ERROR
} from "./actionType";

export const getUserlist = (requserdata) => ({
    type: GET_USER_LIST,
    payload: requserdata,
  });
  
  export const getUserlistSuccess = (actionType, data) => ({
    type: GET_USER_LIST_SUCCESS,
    payload: { actionType, data },
  });
  
  export const getUserlistFail = (actionType, error) => ({
    type: GET_USER_LIST_ERROR,
    payload: { actionType, error },
  });