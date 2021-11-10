import { combineReducers } from "redux";
import users from "./userReducer";
import companies from "./companyReducer";
import recruiters from "./recruiterReducer";
import schedules from "./scheduleReducer";

const rootReducer = combineReducers({
  users,
  companies,
  recruiters,
  schedules,
});

export default rootReducer;
