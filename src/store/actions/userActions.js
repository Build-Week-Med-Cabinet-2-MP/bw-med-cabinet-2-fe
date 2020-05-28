export const FETCH_USER_START = "FETCH_USER_START";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";
export const fetchUser = () => (dispatch) => {
  dispatch({ type: FETCH_USER_START });
};

export const SET_ID = "SET_ID";
export const setID = (id) => (dispatch) => {
  dispatch({ type: SET_ID, payload: id });
};
