import { combineReducers } from "redux";
import auth from "./auth";
import categories from "./categories";

const reducers = combineReducers({
  user: auth,
  categorys: categories,
});
export default reducers;
