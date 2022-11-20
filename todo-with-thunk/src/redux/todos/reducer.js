import { initialState } from "./initialState";
import {
  ADD_TODO,
  CLEAR_COMPLETED,
  COLOR_SELECTED,
  COMPLETE_ALL,
  DELETE_TODO,
  LOADED_TODOS,
  TOGGLE_TODO,
} from "./actionTypes";

function nextId(todos) {
  const maxId = todos.reduce((maxid, todo) => Math.max(todo.id, maxid), 0);
  return maxId + 1;
}

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: nextId(state),
          text: action.payload,
          completed: false,
        },
      ];

    case LOADED_TODOS:
      return action.payload;

    case TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else {
          return todo;
        }
      });

    case COLOR_SELECTED:
      return state.map((todo) => {
        if (todo.id === action.payload.todoId) {
          return {
            ...todo,
            color: action.payload.color,
          };
        } else {
          return todo;
        }
      });

    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);

    case COMPLETE_ALL:
      return state.map((todo) => {
        return {
          ...todo,
          completed: true,
        };
      });

    case CLEAR_COMPLETED:
      return state.filter((todo) => !todo.completed);

    default:
      return state;
  }
};

export default todoReducer;
