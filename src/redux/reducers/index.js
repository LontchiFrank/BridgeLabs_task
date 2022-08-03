import { combineReducers } from "redux";
import auth from "./auth";

const reducers = combineReducers({
  user: auth,
});
export default reducers;
