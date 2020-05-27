import { dummyStrains } from "../../data";
import axios from "axios";
import { axiosWithAuth } from "../../utils";

export const FETCH_STRAINS_START = "FETCH_STRAINS_START";
export const FETCH_STRAINS_SUCCESS = "FETCH_STRAINS_SUCCESS";
export const FETCH_STRAINS_FAILURE = "FETCH_STRAINS_FAILURE";
export const fetchStrains = () => (dispatch) => {
  dispatch({ type: FETCH_STRAINS_START });

  // setTimeout(() => {
  //   dispatch({ type: FETCH_STRAINS_SUCCESS, payload: dummyStrains });
  // }, 2000);

  //put these in axios request
  //on success:
  //on failure:
  // dispatch({ type: FETCH_STRAINS_FAILURE, payload: err });

  axiosWithAuth()
    .get("https://weed-data-bw.herokuapp.com/web_layout_strains")
    .then((res) => {
      console.log("res-->", res);
      dispatch({ type: FETCH_STRAINS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: FETCH_STRAINS_FAILURE, payload: err });
    });

  //axios request here
};
