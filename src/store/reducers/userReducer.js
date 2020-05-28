import { user, signup } from "../actions";
const {
  FETCH_USER_START,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  SET_ID,
} = user;
const { SET_PREFS_SUCCESS } = signup;
const initialState = {
  id: null,
  username: null,
  recommendations: null,
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ID:
      return {
        ...state,
        id: action.payload,
      };
    case SET_PREFS_SUCCESS:
      return {
        ...state,
        recommendations: action.payload,
      };
    default:
      return state;
  }
};
