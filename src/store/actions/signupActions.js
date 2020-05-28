import { axiosWithAuth } from "../../utils";
import { dummyStrains } from "../../data";

export const SET_PREFS_START = "SET_PREFS_START";
export const SET_PREFS_SUCCESS = "SET_PREFS_SUCCESS";
export const SET_PREFS_FAILURE = "SET_PREFS_FAILURE";
export const setPrefs = (prefs) => (dispatch) => {
  const { id } = prefs;
  const effects = {
    user_id: id,
    effects: prefs.effects,
  };
  const flavors = {
    user_id: id,
    flavors: prefs.flavors,
  };
  dispatch({ type: SET_PREFS_START });
  setTimeout(() => {
    dispatch({
      type: SET_PREFS_SUCCESS,
      payload: [dummyStrains[0], dummyStrains[1], dummyStrains[2]],
    });
  }, 3000);

  //Here, we update data in database
  // return axiosWithAuth()
  //   .post(`/api/user/${id}/flavors`, flavors)
  //   .then((res) => {
  //     console.log("FLAVORS:", res);

  //     axiosWithAuth()
  //       .post(`/api/user/${id}/effects`, effects)
  //       .then((res) => {
  //         console.log("EFFECTS:", res);

  //         axiosWithAuth()
  //           .get(`/api/user/${id}/recommendations`)
  //           .then((res) => {
  //             console.log("RECS:", res);
  //             dispatch({ type: SET_PREFS_SUCCESS, payload: res.data });
  //           })
  //           .catch((err) => {
  //             console.log("Error getting recs");
  //           });
  //       })
  //       .catch((err) => {
  //         console.log("Error setting effects");
  //       });
  //   })
  //   .catch((err) => {
  //     console.log("error setting flavors");
  //   });
};

export const TOGGLE_FLAVOR = "TOGGLE_FLAVOR";
export const toggleFlavor = (e) => (dispatch) => {
  const { name } = e.target;
  dispatch({ type: TOGGLE_FLAVOR, payload: name });
};

export const TOGGLE_EFFECT = "TOGGLE_EFFECT";
export const toggleEffect = (e) => (dispatch) => {
  const { name } = e.target;
  dispatch({ type: TOGGLE_EFFECT, payload: name });
};

export const TOGGLE_LOCATION_PERMISSION = "TOGGLE_LOCATION_PERMISSION";
export const toggleLocationPermission = (e) => (dispatch) => {
  //Initialize to null
  let location = null;
  //If user allows location to be stored
  if (e.target.checked) {
    //Get location data here
    location = "test location";
  } //Otherwise location remains null
  //Store info in state
  dispatch({ type: TOGGLE_LOCATION_PERMISSION, payload: location });
};
