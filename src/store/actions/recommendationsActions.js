export const FETCH_REC_START = "FETCH_REC_START";
export const FETCH_REC_SUCCESS = "FETCH_REC_SUCCESS";
export const FETCH_REC_FAILURE = "FETCH_REC_FAILURE";
export const fetchRec = () => (dispatch) => {
  dispatch({ type: FETCH_REC_START });
  setTimeout(() => {
    dispatch({ type: FETCH_REC_SUCCESS });
  }, 3000);
};
