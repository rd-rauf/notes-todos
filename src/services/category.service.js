import axiosInstance from "../core/axios";

function getCategories() {
  return axiosInstance
    .get("/note-categories");
}

export {
  getCategories
}