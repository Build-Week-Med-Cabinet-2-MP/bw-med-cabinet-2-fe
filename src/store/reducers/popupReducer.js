import { popup } from "../actions";
const { POP_OUT, CLOSE_POPUP } = popup;
const initialState = {
  isPopped: false,
  index: null,
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case POP_OUT:
      return {
        ...state,
        isPopped: true,
        index: action.payload,
      };
    case CLOSE_POPUP:
      return {
        ...state,
        isPopped: false,
      };
    default:
      return state;
  }
};
