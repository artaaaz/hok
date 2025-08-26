import React from "react";

export default function TodoItem({ todo, dispatch }) {
  return (
    <li
      style={{
        margin: "10px 0",
        textDecoration: todo.completed ? "line-through" : "none",
      }}
    >
      {todo.text}
      <button
        onClick={() => dispatch({ type: "TOGGLE_TODO", payload: todo.id })}
        style={{ marginLeft: "10px" }}
      >
        {todo.completed ? "Undo" : "Selesai"}
      </button>
      <button
        onClick={() => dispatch({ type: "DELETE_TODO", payload: todo.id })}
        style={{ marginLeft: "10px", color: "red" }}
      >
        Hapus
      </button>
    </li>
  );
}
