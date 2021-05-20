import axios from "axios";
import axiosConfig from "./axiosConfig";

const instance = axios.create({
  baseURL: "https://strapi.minnum.pro"
});

instance.defaults.headers.post["Content-Type"] = "application/json";
axiosConfig.init(instance);

export default instance;
