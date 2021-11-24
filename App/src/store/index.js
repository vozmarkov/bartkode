import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { fetchPosts } from "./posts/posts";

import rootReducer from "./reducers";

const fetchInitialData = (dispatch) => {
  fetchPosts(dispatch);
};

export default function configureStore(preloadedState) {
  const middlewares = [thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);
  fetchInitialData(store.dispatch);
  return store;
}
