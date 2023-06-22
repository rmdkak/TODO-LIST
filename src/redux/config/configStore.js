import { createStore } from "redux";
import { combineReducers } from "redux";
import goal from "redux/modules/goal";

const rootReducer = combineReducers({
  goal,
});
const store = createStore(rootReducer);

export default store;
