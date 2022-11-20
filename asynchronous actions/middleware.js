const delayMiddileware = (store) => (next) => (action) => {
  if (action.type === "todos/todoAdded") {
    console.log("I am delaying");
    setTimeout(() => {
      next(action);
    }, 1000);
    return;
  }

  return next(action);
};

const fetchAsyncMiddleware = (store) => (next) => async (action) => {
  if (typeof action === "function") {
    return action(store.dispatch, store.getState);
  }
  return next(action);
};
module.exports = {
  delayMiddileware,
  fetchAsyncMiddleware,
};
