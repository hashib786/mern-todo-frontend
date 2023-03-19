import React, { useState } from "react";
import "./todoinput.css";

const TodoInput = ({ onCreate }) => {
  const [todoName, setTodoName] = useState("");
  const onSubmitForm = (e) => {
    e.preventDefault();
    const obj = { name: todoName };
    onCreate(obj);
    setTodoName("");
  };

  const inputTake = (e) => {
    setTodoName(e.target.value);
  };

  return (
    <>
      <form onSubmit={onSubmitForm}>
        <input type="text" value={todoName} onChange={inputTake} required />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default TodoInput;
