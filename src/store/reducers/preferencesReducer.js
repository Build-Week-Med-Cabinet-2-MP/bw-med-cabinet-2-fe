import { preferences } from "../actions";
const { TOGGLE_LOCATION_PERMISSION } = preferences;
const initialState = {
  error: {
    flavor: "",
    effect: "",
  },
  flavor: [],
  effect: [],
  locationAccessAllowed: false,
  location: null,
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LOCATION_PERMISSION:
      return {
        ...state,
        locationAccessAllowed: !state.locationAccessAllowed,
        location: action.payload,
      };
    default:
      return state;
  }
};
