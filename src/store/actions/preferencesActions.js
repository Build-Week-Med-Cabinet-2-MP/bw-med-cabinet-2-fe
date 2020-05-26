import { axiosWithAuth } from "../../utils";
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
