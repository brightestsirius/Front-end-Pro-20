import React from "react";
import TodoItemCompleted from "./TodoItemCompleted";

export default function TodoItem({ item }) {
  return (
    <li key={item.id}>
      {item.title} <TodoItemCompleted item={item} />
    </li>
  );
}
