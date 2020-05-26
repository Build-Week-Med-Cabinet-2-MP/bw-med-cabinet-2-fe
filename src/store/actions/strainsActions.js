import { axiosWithAuth } from "../../utils";
export const FETCH_STRAINS_START = "FETCH_STRAINS_START";
export const FETCH_STRAINS_SUCCESS = "FETCH_STRAINS_SUCCESS";
export const FETCH_STRAINS_FAILURE = "FETCH_STRAINS_FAILURE";
export const fetchStrains = () => (dispatch) => {
  dispatch({ type: FETCH_STRAINS_START });
  axiosWithAuth()
    .get(`/api/strains`)
    .then((res) => {
      console.log(res);
      dispatch({ type: FETCH_STRAINS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: FETCH_STRAINS_FAILURE, payload: err.mess });
      if (err.response) {
        console.log(err.response);
      } else if (err.request) {
        console.log(err.request);
      } else {
        console.log("Error: " + err.message);
      }
    });
};
