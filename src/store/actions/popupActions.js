export const POP_OUT = "POP_OUT";
export const popout = (index) => (dispatch) => {
  dispatch({ type: POP_OUT, payload: index });
};
export const CLOSE_POPUP = "CLOSE_POPUP";
export const closePopup = () => (dispatch) => {
  dispatch({ type: CLOSE_POPUP });
};
