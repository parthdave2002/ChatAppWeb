import { combineReducers } from "redux";

// Node Reducer
import Login from "./Login/reducer";
import User from "./User/reducer";

const rootReducer = combineReducers({
    // public
    Login,
    User,
});

export default rootReducer;