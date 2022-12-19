import { useState } from "react";
import { getTodo, changeItem } from "./../services/todoSevice";

export default function useTodo() {
  const [todo, setTodo] = useState([]);

  const changeCompleted = async (item) => {
    let changedItem = await changeItem(item.id, { completed: !item.completed });

    setTodo((prevState) =>
      prevState.map((element) => {
        if (element.id === item.id) element = changedItem;
        return element;
      })
    );
  };

  const getList = async () => {
    setTodo(await getTodo());
  };

  return { todo, changeCompleted, getList };
}
