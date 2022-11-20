import { toggle_todo } from "../actions";

const updateStatus = (todoId, currentStatus) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ completed: !currentStatus }),
    });
    const todo = await response.json();
    dispatch(toggle_todo(todo.id));
  };
};

export default updateStatus;
