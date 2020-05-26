import { preferences } from "../actions";
const {
  TOGGLE_LOCATION_PERMISSION,
  TOGGLE_FLAVOR,
  TOGGLE_EFFECT,
  SUBMIT_PREFS_START,
  SUBMIT_PREFS_SUCCESS,
  SUBMIT_PREFS_FAILURE,
} = preferences;
const initialState = {
  errors: {
    flavors: false,
    effects: false,
  },
  flavors: [],
  effects: [],
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
    case TOGGLE_FLAVOR:
      return {
        ...state,
        errors: {
          ...state.errors,
          flavors: state.flavors.length === 3 ? true : false,
        },
        flavors: state.flavors.includes(action.payload)
          ? state.flavors.filter((x) => x !== action.payload)
          : state.flavors.length === 3
          ? state.flavors
          : [...state.flavors, action.payload],
      };
    case TOGGLE_EFFECT:
      return {
        ...state,
        errors: {
          ...state.errors,
          effects: state.effects.length === 3 ? true : false,
        },
        effects: state.effects.includes(action.payload)
          ? state.effects.filter((x) => x !== action.payload)
          : state.effects.length === 3
          ? state.effects
          : [...state.effects, action.payload],
      };
    case SUBMIT_PREFS_START:
      return {
        ...state,
      };
    case SUBMIT_PREFS_SUCCESS:
      return {
        ...state,
      };
    case SUBMIT_PREFS_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};
