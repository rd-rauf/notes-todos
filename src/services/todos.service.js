import axiosInstance from "../core/axios";
/* const axios = require('axios'); */

function getTodos() {
  return axiosInstance
    .get("/todos?_sort=created_at:DESC");
}

function createTodo(todoItem) {
  return axiosInstance
    .post("/todos", {
      ...todoItem
    });
}

function updateTodo(todoItem) {
  return axiosInstance
    .put("/todos/" + todoItem.id, {
      ...todoItem
    });
}

function deleteTodo(todoItem) {
  return axiosInstance
    .delete("/todos/" + todoItem.id);
}

export {
  getTodos,
  updateTodo,
  createTodo,
  deleteTodo
}