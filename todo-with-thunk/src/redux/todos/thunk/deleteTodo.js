import { delete_todo } from "../actions";

const deleteTodo = (todoId) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    dispatch(delete_todo(todoId));
  };
};

export default deleteTodo;
