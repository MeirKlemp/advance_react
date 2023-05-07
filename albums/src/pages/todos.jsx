import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useResource, updateResource } from "../api";
import { UserContext } from "../App";

export default function Todos() {
  const { user } = useContext(UserContext);
  const [todos, setTodos] = useResource("todos?userId=" + user.id);
  const [order, setOrder] = useState(0);
  const [orderedTodos, setOrderedTodos] = useState(null);

  const handleTodoChange = (todo) => {
    updateResource("todos/" + todo.id, todo);

    // Replace the old todo with the changed todo.
    const updatedTodos = todos.reduce((arr, t, i) => {
      arr[i] = t.id === todo.id ? todo : t;
      return arr;
    }, new Array(todos.length));
    setTodos(updatedTodos);
  };

  useEffect(() => {
    setOrderedTodos(todos?.toSorted(Orders[order].compare));
  }, [todos, order]);

  return (
    <div>
      <h1>Todos</h1>
      <div>
        <span>Order:</span>
        <select value={order} onChange={(e) => setOrder(e.target.value)}>
          {Orders.map((o, i) => (
            <option key={i} value={i}>
              {Orders[i].title}
            </option>
          ))}
        </select>
      </div>
      <div>
        {orderedTodos?.map((todo) => (
          <React.Fragment key={todo.id}>
            <Todo todo={todo} onChange={handleTodoChange} />
            <br />
          </React.Fragment>
        ))}
      </div>
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

const Orders = [
  {
    title: "Default",
    compare: (a, b) => 0,
  },
  {
    title: "Completed",
    /*
     * Place `a` before `b`:
     *   false - true  = -1
     * Place `b` before `a`:
     *   true - false  =  1
     * Keep order of `a` and `b`:
     *   true - true   =  0
     *   false - false =  0
     */
    compare: (a, b) => a.completed - b.completed,
  },
  {
    title: "Alphabetically",
    compare: (a, b) => {
      const aTitle = a.title.toUpperCase();
      const bTitle = b.title.toUpperCase();
      if (aTitle < bTitle) {
        return -1;
      }
      if (aTitle > bTitle) {
        return 1;
      }
      return 0;
    },
  },
  {
    title: "Random",
    compare: (a, b) => {
      // Generate random number from [-1, 0, 1].
      return Math.floor(Math.random() * 3 - 1);
    },
  },
];
