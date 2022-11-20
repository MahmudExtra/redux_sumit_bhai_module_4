import { combineReducers } from "redux";
import filterReducer from "./filters/reducer";
import todoReducer from "./todos/reducer";
// combineReducers
const rootReducer = combineReducers({
  todos: todoReducer,
  filters: filterReducer,
});
export default rootReducer;
