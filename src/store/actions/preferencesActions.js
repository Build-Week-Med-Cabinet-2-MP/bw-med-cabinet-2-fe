export const TOGGLE_LOCATION_PERMISSION = "TOGGLE_LOCATION_PERMISSION";
export const toggleLocationPermission = (e) => (dispatch) => {
  //Initialize to null
  let location = null;
  //If user allows location to be stored
  if (e.target.checked) {
    location = "test location";
    //Get location data here
  } //Otherwise location remains null
  //Store info in state
  dispatch({ type: TOGGLE_LOCATION_PERMISSION, payload: location });
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

export const SUBMIT_PREFS_START = "SUBMIT_PREFS_START";
export const SUBMIT_PREFS_SUCCESS = "SUBMIT_PREFS_SUCCESS";
export const SUBMIT_PREFS_FAILURE = "SUBMIT_PREFS_FAILURE";
export const submitPrefs = (prefs) => (dispatch) => {
  dispatch({ type: SUBMIT_PREFS_START });
  //Here, we update data in database
  // axiosWithAuth()
  //   .post(`/api/prefs`, prefs)
  //   .then((res) => {
      dispatch({ type: SUBMIT_PREFS_SUCCESS });
    // })
    // .catch((err) => {
    //   dispatch({ type: SUBMIT_PREFS_FAILURE });
    // });
};
