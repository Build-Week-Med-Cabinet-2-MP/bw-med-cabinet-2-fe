import { visual } from "../actions";
const { SET_CUR_REC, SET_FULL_REC } = visual;
const initialState = {
  curRec: 0,
  fullRecObj: null,
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CUR_REC:
      return {
        ...state,
        curRec: action.payload,
      };
    case SET_FULL_REC:
      return {
        ...state,
        fullRecObj: action.payload,
      };
    default:
      return state;
  }
};
