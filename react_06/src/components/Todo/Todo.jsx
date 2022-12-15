import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

import {FILTER_ALL, FILTER_COMPLETED, FILTER_NON_COMPLETED} from './../../constants/filter'

export default function Todo({ getTodo, todo, changeCompleted, deleteListItem, filter }) {
  const [todoFiltered, setTodoFiltered] = useState(todo);

  useEffect(() => {
    getTodo();
  }, []);

  useEffect(() => {
    setTodoFiltered(todo.filter(item => {
      if(filter === FILTER_ALL) return item;
      if(filter === FILTER_COMPLETED) return item.completed;
      if(filter === FILTER_NON_COMPLETED) return !item.completed;
    }))
  }, [todo, filter]);

  return (
    <ul>
      {todoFiltered.map((item) => (
        <TodoItem key={item.id} item={item} changeCompleted={changeCompleted} deleteListItem={deleteListItem} />
      ))}
    </ul>
  );
}
