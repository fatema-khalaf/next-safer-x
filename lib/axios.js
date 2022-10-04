import Axios from "axios";
import AppUrl from "./AppUrl";

const axios = Axios.create({
  baseURL: AppUrl.BaseURL,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
  withCredentials: true,
});

export default axios;
