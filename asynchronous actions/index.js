const { createStore, applyMiddleware } = require("redux");
const { fetchTodos } = require("./functions");
// const { delayMiddileware, fetchAsyncMiddleware } = require("./middleware");
const thunk = require("redux-thunk");

// initail state
const initialState = {
  todos: [],
};

// making reducer
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todos/todoAdded":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            title: action.payload,
          },
        ],
      };

    case "todos/todoLoaded":
      return {
        ...state,
        todos: [...state.todos, ...action.payload],
      };

    default:
      return state;
  }
};

// making a store
const store = createStore(
  todoReducer,
  //   applyMiddleware(delayMiddileware, fetchAsyncMiddleware)
  // now we dont need custom middleware
  applyMiddleware(thunk.default)
);

// subscribing to store
store.subscribe(() => {
  console.log(store.getState());
});

// dispatching an action
// store.dispatch({
//   type: "todos/todoAdded",
//   payload: "Hello from world!",
// });

// store.dispatch({
//   type: "todos/fetchTodo",
// });

store.dispatch(fetchTodos);
