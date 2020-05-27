import { signup } from "../actions";
const {
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  STORE_SIGNUP_INFO,
  TOGGLE_LOCATION_PERMISSION,
  TOGGLE_FLAVOR,
  TOGGLE_EFFECT,
} = signup;
const initialState = {
  errors: {
    flavors: false,
    effects: false,
  },
  signupInfo: {
    name: "",
    password: "",
    email: "",
  },
  flavors: [],
  effects: [],
  locationAccessAllowed: false,
  location: null,
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_START:
      return {
        ...state,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
      };
    case STORE_SIGNUP_INFO:
      return {
        ...state,
        signupInfo: action.payload,
      };
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
    default:
      return state;
  }
};
