import React from "react";
import TodoItemCompleted from "./TodoItemCompleted";
import TodoItemDelete from "./TodoItemDelete";

export default function TodoItem({ item, changeCompleted, deleteListItem }) {
  return (
    <li>
      {item.title}{" "}
      <TodoItemCompleted item={item} changeCompleted={changeCompleted} />{" "}
      <TodoItemDelete id={item.id} deleteListItem={deleteListItem} />
    </li>
  );
}
