import { createStore } from "redux";
import { combineReducers } from "redux";
import goal from "redux/modules/goal";
import title from "redux/modules/title";
import body from "redux/modules/body";

const rootReducer = combineReducers({
  goal,
  title,
  body,
});
const store = createStore(rootReducer);

export default store;
