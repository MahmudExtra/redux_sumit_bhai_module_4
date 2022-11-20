import { loaded_todos } from "../actions";

const fetchTodos = async (dispatch) => {
  const response = await fetch("http://localhost:9000/todos");
  const todos = await response.json();
  dispatch(loaded_todos(todos));
};
export default fetchTodos;
