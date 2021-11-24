export const GET_POSTS = "posts/loading_started";
export const GET_POSTS_SUCCESS = "posts/loading_success";
export const GET_POSTS_FAILURE = "posts/loading_failure";

export async function fetchPosts(dispatch, page = 0) {
  dispatch({ type: GET_POSTS });
  try {
    const items = await fetch("/posts");
    const data = await items.json();
    console.log("DATA::", data);
    dispatch({ type: GET_POSTS_SUCCESS, payload: { data } });
  } catch (err) {
    dispatch({ type: GET_POSTS_FAILURE, payload: { error: err.message } });
  }
}

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        loading: true,
      };
    case GET_POSTS_SUCCESS:
      const { data } = action.payload;
      return {
        ...state,
        data,
        loading: false,
      };
    case GET_POSTS_FAILURE:
      const { error } = action.payload;
      return {
        ...state,
        loading: false,
        error,
      };
    default:
      return state;
  }
};
