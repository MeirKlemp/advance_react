import React, { useState, useEffect, useContext } from "react";
import usePState from "../persist";
import { useResource, updateResource } from "../api";
import { UserContext } from "../App";

export default function Todos() {
  const { user } = useContext(UserContext);
  const [todos, setTodos] = useResource("todos?userId=" + user.id);
  const [order, setOrder] = usePState(0, "order");
  const [oTodos, setOTodos] = useState(null);

  useEffect(() => {
    setOTodos(todos?.toSorted(Orders[order].compare));
  }, [order, todos]);

  const handleTodoChange = (todo) => {
    updateResource("todos/" + todo.id, todo);

    // Replace the old todo with the changed todo.
    const updatedTodos = todos.reduce((arr, t, i) => {
      arr[i] = t.id === todo.id ? todo : t;
      return arr;
    }, new Array(todos.length));
    setTodos(updatedTodos);
  };

  const handleTodoRemove = (todo) => {
    const updatedTodos = todos.filter((t) => t.id !== todo.id);
    setTodos(updatedTodos);
  };

  const handleNewTodo = () => {
    const title = prompt("Please enter your todo");
    if (title) {
      const newTodo = {
        userId: user.id,
        id: Math.floor(Math.random() * 2000000 - 1),
        title,
        completed: false,
      };
      setTodos([...todos, newTodo]);
    }
  };

  const orderEls = Orders.map((o, i) => (
    <option key={i} value={i}>
      {o.title}
    </option>
  ));

  const todoEls = oTodos?.map((todo) => (
    <React.Fragment key={todo.id}>
      <Todo
        todo={todo}
        onChange={handleTodoChange}
        onRemove={handleTodoRemove}
      />
      <br />
    </React.Fragment>
  ));

  return (
    <div className="container">
      <h1>Todos</h1>
      <div className="data">
        <span>Order: </span>
        <select value={order} onChange={(e) => setOrder(e.target.value)}>
          {orderEls}
        </select>
        <button className="addButton" onClick={() => handleNewTodo()}>
          +
        </button>
      </div>
      <div className="data">{todoEls}</div>
    </div>
  );
}

function Todo({ todo, onChange, onRemove }) {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => onChange?.({ ...todo, completed: e.target.checked })}
        />
        <span>{todo.title}</span>
      </label>
      <button className="removeBtn" onClick={() => onRemove?.(todo)}>
        X
      </button>
    </div>
  );
}

const Orders = [
  {
    title: "Default",
    compare: (a, b) => a.id - b.id,
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
