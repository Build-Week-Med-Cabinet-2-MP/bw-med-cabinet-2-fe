import { combineReducers } from "redux";
import { reducer as strains } from "./strainsReducer";
import { reducer as popup } from "./popupReducer";
import { reducer as preferences } from "./preferencesReducer";

export default combineReducers({ strains, popup, preferences });
