import React from "react";
import "./TodoItem.css";

const TodoItem = ({ data, onDelete, onUpdate }) => {
  return (
    <li>
      <div className="item">{data.name}</div>
      <button className="item">&#x2295;</button>
      <button className="item" onClick={() => onDelete(data._id)}>
        X
      </button>
    </li>
  );
};

export default TodoItem;
