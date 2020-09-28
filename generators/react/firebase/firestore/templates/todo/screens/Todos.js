import React from "react";

import {useTodos} from "../hooks"

const TodosScreen = () => {
  const [todos, add] = useTodos();

  function handleAdd(e) {
    e.preventDefault();

    add(e.target.text.value);

    e.target.text.value = "";
  }

  return (
    <div>
      <form onSubmit={handleAdd}>
        <input name="text" type="text" />
        <button type="submit">Agregar</button>
      </form>
      <ul>
        {todos.map(({id, text, remove}) => (
          <li key={id}>
            <span>{text}</span>
            <button onClick={remove}>X</button>
          </li>
        ))}
      </ul>
    </div>
  )
};

export default TodosScreen;
