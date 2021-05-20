import axiosInstance from "../core/axios";
/* const axios = require('axios'); */

function getTodos() {
  return axiosInstance
    .get("/todos?_sort=created_at:DESC");
}

function updateTodo(todoItem) {
  return axiosInstance
    .put("/todos/" + todoItem.id, {
      ...todoItem
    });
}

export {
  getTodos,
  updateTodo
}