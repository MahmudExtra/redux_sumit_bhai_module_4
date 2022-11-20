import React, { useState } from "react";
import NotesImg from "../assets/images/notes.png";
import PlusImg from "../assets/images/plus.png";
import DoubleTickImg from "../assets/images/double-tick.png";
import { useDispatch } from "react-redux";
import { clear_completed, complete_all } from "../redux/todos/actions";
import addTodo from "../redux/todos/thunk/addTodo";

const Header = () => {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setTodoText(e.target.value);
  };

  const handleSubmitTodo = (e) => {
    e.preventDefault();
    // if(todoText.trim() === "") return;
    // dispatch(add_todo(todoText));
    // setTodoText("");
    if (todoText !== "") {
      dispatch(addTodo(todoText));
      setTodoText("");
    }
    return;
  };

  const completeHandler = () => {
    dispatch(complete_all());
  };
  const clearHandler = () => {
    dispatch(clear_completed());
  };

  return (
    <div>
      <form
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
        onSubmit={handleSubmitTodo}
      >
        <img src={NotesImg} className="w-6 h-6" alt="Add todo" />
        <input
          onChange={handleInput}
          value={todoText}
          type="text"
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
        />
        <button
          type="submit"
          className={`appearance-none w-8 h-8 bg-[url(${PlusImg})] bg-no-repeat bg-contain`}
        ></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li className="flex space-x-1 cursor-pointer" onClick={completeHandler}>
          <img className="w-4 h-4" src={DoubleTickImg} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li className="cursor-pointer" onClick={clearHandler}>
          Clear completed
        </li>
      </ul>
    </div>
  );
};

export default Header;
