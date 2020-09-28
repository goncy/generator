import React from "react";

import TodoContext from "./context";

export function useTodos() {
  const {
    state: { todos },
    actions: { add, remove }
  } = React.useContext(TodoContext);

  return [
    todos.map(todo => ({
      ...todo,
      remove: () => remove(todo.id),
    })),
    add
  ];
}
