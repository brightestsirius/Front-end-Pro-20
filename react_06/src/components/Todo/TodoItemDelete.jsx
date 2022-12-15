import React from "react";

export default function TodoItemDelete({ id, deleteListItem }) {
  const handleClick = () => deleteListItem(id);
  return <button onClick={handleClick}>Delete</button>;
}
