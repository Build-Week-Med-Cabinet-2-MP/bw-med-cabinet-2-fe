import { axiosWithAuth, clearToken } from "../../utils";
export const SIGN_OUT = "SIGN_OUT";
export const signOut = () => (dispatch) => {
  clearToken();
  dispatch({ type: SIGN_OUT });
};

export const UPDATE_USERNAME_START = "UPDATE_USERNAME_START";
export const UPDATE_USERNAME_SUCCESS = "UPDATE_USERNAME_SUCCESS";
export const UPDATE_USERNAME_FAILURE = "UPDATE_USERNAME_FAILURE";
export const updateUsername = (data) => (dispatch) => {
  const { id, req } = data;
  dispatch({ type: UPDATE_USERNAME_START });
  axiosWithAuth()
    .put(`/api/user/${id}`, data)
    .then((res) => {
      console.log(res);
      dispatch({ type: UPDATE_USERNAME_SUCCESS, payload: res.data.user})
    })
    .catch((err) => {
      console.log(err);
    });
};
