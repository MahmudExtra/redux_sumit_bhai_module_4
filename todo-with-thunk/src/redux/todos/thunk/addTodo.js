import { add_todo } from "../actions";

const addTodo = (todoText) => {
  return async (dispatch, getState) => {
    const response = await fetch("http://localhost:9000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ text: todoText, completed: false }),
    });
    const todo = await response.json();
    dispatch(add_todo(todo.text));
  };
};

export default addTodo;
