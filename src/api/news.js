import axios from "axios";
const BASE_URL = "https://kindergarten-api.onrender.com/";

axios.defaults.baseURL = BASE_URL;

export const getData = (path = "") => {
  return axios.get(path).then((r) => r.data);
};
