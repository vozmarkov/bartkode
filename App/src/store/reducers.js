import { combineReducers } from "redux";
import { reducer } from "./posts/posts";
const rootReducer = combineReducers({
  posts: reducer,
});

export default rootReducer;
