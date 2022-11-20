import { color_selected } from "../actions";

const updateColor = (todoId, color) => {
  return async (dispatch, getState) => {
    const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ color: color }),
    });
    const todo = await response.json();
    dispatch(color_selected(todo.id, todo.color));
  };
};

export default updateColor;
