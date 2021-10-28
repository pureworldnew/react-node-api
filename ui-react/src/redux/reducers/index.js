import { combineReducers } from "redux";
import users from "./userReducer";
import companies from "./companyReducer";

const rootReducer = combineReducers({ users: users, companies: companies });

export default rootReducer;
