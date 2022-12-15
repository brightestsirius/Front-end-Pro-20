import React, { useState, useCallback } from "react";
import TodoFilterAlternative from "./components/Todo/TodoFilterAlternative";
import Form from './components/Form/Form';
import Filter from './components/Filter/Filter';
import Theme from './components/Theme/Theme'

import { getList, changeItem, deleteItem, addItem } from "./services/todoService";

import {FILTER_ALL} from './constants/filter';
import {THEME_LIGHT} from './constants/theme'
import { useEffect } from "react";

export default function App() {
  const [todo, setTodo] = useState([]);
  const [filter, setFilter] = useState(localStorage.getItem(`filter`) ? localStorage.getItem(`filter`) : FILTER_ALL);
  const [theme, setTheme] = useState(localStorage.getItem(`theme`) ? localStorage.getItem(`theme`) : THEME_LIGHT);

  useEffect(() => {
    localStorage.setItem(`filter`, filter);
  }, [filter])

  useEffect(() => {
    localStorage.setItem(`theme`, theme);
  }, [theme])

  const getTodo = async () => {
    setTodo(await getList());
  };

  const getHelloWorld = useCallback(
    () => {
      // console.log(`in getHelloWorld`);

      let str1 = `Hello`;
      let str2 = `world`;
      
      return [str1, str2, theme].join(`, `) + `!`;
    }, [theme]);

  const changeCompleted = async (item) => {
    let changedItem = await changeItem(item.id, { completed: !item.completed });

    setTodo((prevState) =>
      prevState.map((element) => {
        if (element.id === item.id) element = changedItem;
        return element;
      })
    );
  };

  const deleteListItem = async (id) => {
    await deleteItem(id);

    setTodo((prevState) => prevState.filter((item) => item.id !== id));
  };

  const addListItem = async obj => {
    let addedItem = await addItem(obj);

    setTodo(prevState => ([...prevState, addedItem]))
  }

  return (
    <div>
      <h1>{getHelloWorld()}</h1>
      <Theme theme={theme} setTheme={setTheme} />
      <hr></hr>
      <Form addListItem={addListItem} />
      <hr></hr>
      <Filter filter={filter} setFilter={setFilter} />
      <hr></hr>
      <TodoFilterAlternative
        todo={todo}
        getTodo={getTodo}
        changeCompleted={changeCompleted}
        deleteListItem={deleteListItem}
        filter={filter}
        theme={theme}
      />
    </div>
  );
}
