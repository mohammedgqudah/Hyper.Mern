import axios from "axios";
import settings from "../settings";

const _base = axios.create({
  baseURL: `${settings.SERVER}/api`
});
_base.interceptors.request.use(function(config) {
  const token = localStorage.getItem("USER_TOKEN");
  config.headers.Authorization = `bearer ${token}`;
  return config;
});

export default _base;
