import axios from "axios";
import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";
import "./TodoList.css";

const TodoList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const todo = await axios.get(`${process.env.REACT_APP_API_URL}/api/v1`);
      setData((prevTodo) => todo.data.message);
    };
    fetchData();
  }, []);

  const createTodo = async (todoItem) => {
    const todo = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/v1`,
      todoItem
    );
    setData((prevTodo) => [todo.data.message, ...prevTodo]);
  };

  const deleteTodo = async (id) => {
    await axios.delete("/api/v1/" + id);
    setData((prevTodo) => prevTodo.filter((ele) => ele._id !== id));
  };

  return (
    <>
      <h1>Todo App</h1>
      <TodoInput onCreate={createTodo} />
      <hr />
      <ul>
        {data.map((ele) => (
          <TodoItem key={ele._id} data={ele} onDelete={deleteTodo} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
