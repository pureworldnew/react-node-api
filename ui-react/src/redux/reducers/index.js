import { combineReducers } from "redux";
import users from "./userReducer";
import companies from "./companyReducer";
import recruiters from "./recruiterReducer";

const rootReducer = combineReducers({
  users: users,
  companies: companies,
  recruiters,
});

export default rootReducer;
