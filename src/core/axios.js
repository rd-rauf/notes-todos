import axios from "axios";
import axiosConfig from "./axiosConfig";

console.log( "Axios file loaded" );

const instance = axios.create({
  baseURL: "https://strapi-api-backend.herokuapp.com"
  // baseURL: "http://localhost:1337"
});

console.log( "Axios instance initialized" );

/* let userAuthInfo = localStorage.getItem("userInfo");
if (userAuthInfo) {
  userAuthInfo = JSON.parse(userAuthInfo);
  if (userAuthInfo.userAuthToken) {
    instance.defaults.headers.common["Authorization"] = "Bearer " + userAuthInfo.userAuthToken;
  }
} */
instance.defaults.headers.post["Content-Type"] = "application/json";

axiosConfig.init(instance);

export default instance;
