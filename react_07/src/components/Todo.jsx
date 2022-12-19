import React, { useEffect, useContext } from "react";
import TodoItem from "./TodoItem";

import ThemeContext from "../context/ThemeContext";

export default function Todo({ getList, todo }) {
  const { textCase, textColor, bgColor } = useContext(ThemeContext);

  useEffect(() => {
    getList();

    return () => {
      // componentWillUnmount;
      // abortAxios();
    };
  }, []);

  return (
    <ul style={{ color: textColor, textTransform: textCase, background: bgColor }}>
      {todo.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </ul>
  );
}
