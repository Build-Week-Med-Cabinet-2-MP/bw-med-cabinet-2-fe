import { combineReducers } from "redux";
import { reducer as strains } from "./strainsReducer";
import { reducer as popup } from "./popupReducer";
import { reducer as signup } from "./signupReducer";
import { reducer as user } from "./userReducer";
import { reducer as visual } from "./visualReducer";
import { reducer as settings } from "./settingsReducers";

export default combineReducers({
  strains,
  popup,
  signup,
  user,
  visual,
  settings,
});
