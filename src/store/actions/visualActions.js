export const SET_CUR_REC = "SET_CUR_REC";
export const setCurRec = (index) => (dispatch) => {
  dispatch({ type: SET_CUR_REC, payload: index });
};

export const SET_FULL_REC = "SET_FULL_REC";
export const setFullRec = (obj) => (dispatch) => {
  dispatch({ type: SET_FULL_REC, payload: obj });
};
