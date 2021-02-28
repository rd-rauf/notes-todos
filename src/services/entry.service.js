import axiosInstance from "../core/axios";

function getEntries(noteId) {
  return axiosInstance
    .get(`/entries?note.id=${noteId}`);
}

export {
  getEntries
}