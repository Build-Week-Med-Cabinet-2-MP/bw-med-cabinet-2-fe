import { settings } from "../actions";
const {
  SIGN_OUT,
  UPDATE_USERNAME_START,
  UPDATE_USERNAME_SUCCESS,
  UPDATE_USERNAME_FAILURE,
} = settings;
const initialState = {};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_OUT:
      return state;
    case UPDATE_USERNAME_START:
      return state;
    case UPDATE_USERNAME_SUCCESS:
      return state;
    case UPDATE_USERNAME_FAILURE:
      return state;
    default:
      return state;
  }
};
