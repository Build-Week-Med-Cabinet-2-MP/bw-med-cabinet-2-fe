import { combineReducers } from "redux";
import { reducer as strains } from "./strainsReducer";
import { reducer as popup } from "./popupReducer";

export default combineReducers({ strains, popup });
