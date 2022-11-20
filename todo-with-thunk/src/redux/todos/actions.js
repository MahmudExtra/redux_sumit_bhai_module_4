import {
  ADD_TODO,
  CLEAR_COMPLETED,
  COMPLETE_ALL,
  COLOR_SELECTED,
  DELETE_TODO,
  TOGGLE_TODO,
  LOADED_TODOS,
} from "./actionTypes";

export const add_todo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export const loaded_todos = (todos) => {
  return {
    type: LOADED_TODOS,
    payload: todos,
  };
};

export const toggle_todo = (todoId) => {
  return {
    type: TOGGLE_TODO,
    payload: todoId,
  };
};

export const color_selected = (todoId, color) => {
  return {
    type: COLOR_SELECTED,
    payload: {
      todoId,
      color,
    },
  };
};

export const delete_todo = (todoId) => {
  return {
    type: DELETE_TODO,
    payload: todoId,
  };
};

export const complete_all = () => {
  return {
    type: COMPLETE_ALL,
  };
};

export const clear_completed = () => {
  return {
    type: CLEAR_COMPLETED,
  };
};
