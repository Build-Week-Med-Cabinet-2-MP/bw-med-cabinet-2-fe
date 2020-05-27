export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";
export const signup = (userInfo) => (dispatch) => {
  dispatch({ type: SIGNUP_START });
  //Here, we update data in database
  // axiosWithAuth()
  //   .post(`/api/register`, userInfo)
  //   .then((res) => {
  dispatch({ type: SIGNUP_SUCCESS });
  // })
  // .catch((err) => {
  //   dispatch({ type: SIGNUP_FAILURE });
  // });
};

export const STORE_SIGNUP_INFO = "STORE_SIGNUP_INFO";
export const storeSignupInfo = (signupInfo) => (dispatch) => {
  dispatch({ type: STORE_SIGNUP_INFO, payload: signupInfo });
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
    location = "test location";
    //Get location data here
  } //Otherwise location remains null
  //Store info in state
  dispatch({ type: TOGGLE_LOCATION_PERMISSION, payload: location });
};
