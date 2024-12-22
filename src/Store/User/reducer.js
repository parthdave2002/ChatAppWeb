import {
    GET_USER_LIST,
    GET_USER_LIST_SUCCESS,
    GET_USER_LIST_ERROR,
  } from "./actionType";
  
  const INIT_STATE = {
    UserList: [],
    error: {},
  };
  
  const User = (state = INIT_STATE, action) => {

    switch (action.type) {
        
      case GET_USER_LIST_SUCCESS:
        switch (action.payload.actionType) {
          case GET_USER_LIST:
            console.log("UserList =====>", action.payload);
            return {
              ...state,
              UserList: action.payload.data.data,
              // UserListSize: action.payload.data.size,
              // TotalUserListData: action.payload.data.totalData,
              // CurrentPage: action.payload.data.page,
            };
        }
      case GET_USER_LIST_ERROR:
        switch (action.payload.actionType) {
          case GET_USER_LIST:
            return {
              ...state,
              error: action.payload,
            };
          default:
            return { ...state };
        }
  
      default:
        return state;
    }
  };
  
  export default User;