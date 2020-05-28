import axios from "axios";
import { getToken } from "./index";

export const axiosWithAuth = () => {
  const token = getToken();
  return axios.create({
    headers: {
      Authorization: token,
    },
    baseURL: "https://bw-med-cabinet-backend.herokuapp.com/",
  });
};
