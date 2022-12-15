import React, { useState } from "react";

export default function Form({addListItem}) {
  const [newTodo, setNewTodo] = useState({
    title: ``,
    completed: false,
  });

  const handleTitle = e => setNewTodo(prevState => ({...prevState, title: e.target.value}))
  const handleCompleted = e => setNewTodo(prevState => ({...prevState, completed: e.target.checked}))

  const handleSubmit = e => {
    e.preventDefault();
    addListItem(newTodo);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title: <input type="text" onBlur={handleTitle} />
      </label>
      <label>
        Completed: <input type="checkbox" onChange={handleCompleted} />
      </label>
      <button>Add todo</button>
    </form>
  );
}
