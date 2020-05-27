import { rec } from "../actions";
const { FETCH_REC_START, FETCH_REC_SUCCESS, FETCH_REC_FAILURE } = rec;
const initialState = {
  isFetching: false,
  test: "Testing 123",
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REC_START:
      return { ...state, isFetching: true };
    case FETCH_REC_SUCCESS:
      return { ...state, isFetching: false };
    case FETCH_REC_FAILURE:
      return { ...state, isFetching: false };
    default:
      return state;
  }
};
