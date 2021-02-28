import axiosInstance from "../core/axios";

function getNotes(categoryId) {
  return axiosInstance
    .get(`/notes?note_category.id=${categoryId}`);
}

export {
  getNotes
}