import React, { useContext } from "react";

import TodoContext from "../context/TodoContext";

export default function TodoItemCompleted({ item }) {
  const handleChange = () => changeCompleted(item);
  const { changeCompleted } = useContext(TodoContext);

  return (
    <input
      type="checkbox"
      defaultChecked={item.completed}
      onChange={handleChange}
    />
  );
}
