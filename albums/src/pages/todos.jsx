import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useApi from "../api";

// TODO: Get loggedin user id.
const userId = "1";

export default function Todos() {
  const [todos, setTodos] = useState(null);
  // TODO: Move this into api.js
  useEffect(() => {
    if (userId) {
      fetch("https://jsonplaceholder.typicode.com/todos?userId=" + userId)
        .then((response) => response.json())
        .then((json) => setTodos(json));
    }
  }, [userId]);
  const handleTodoChange = (todo) => {
    fetch("https://jsonplaceholder.typicode.com/posts/" + todo.id, {
      method: "PUT",
      body: JSON.stringify(todo),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

    // Replace the old todo with the changed todo.
    const updatedTodos = todos.reduce((arr, t, i) => {
      arr[i] = t.id === todo.id ? todo : t;
      return arr;
    }, new Array(todos.length));
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todos</h1>
      {todos &&
        todos.map((todo) => (
          <React.Fragment key={todo.id}>
            <Todo todo={todo} onChange={handleTodoChange} />
            <br />
          </React.Fragment>
        ))}
    </div>
  );
}

function Todo({ todo, onChange }) {
  return (
    <label>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={(e) => onChange?.({ ...todo, completed: e.target.checked })}
      />
      <span>{todo.title}</span>
    </label>
  );
}
