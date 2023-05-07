import React from "react";
import { Link } from "react-router-dom";
import useApi from "../api";

export default function Todos() {
  const todos = useApi("todos");
  return (
    <div>
      <h1>Todos</h1>
      {todos && todos.map((todo) => <h2 key={todo.id}>{todo.title}</h2>)}
    </div>
  );
}
