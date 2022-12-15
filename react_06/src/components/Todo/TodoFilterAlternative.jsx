import React, { useEffect, useMemo } from "react";
import TodoItem from "./TodoItem";

import {FILTER_ALL, FILTER_COMPLETED, FILTER_NON_COMPLETED} from './../../constants/filter'
import {THEME_LIGHT} from './../../constants/theme';

export default function TodoFilterAlternative({ getTodo, todo, changeCompleted, deleteListItem, filter, theme }) {

  const getFilteredList = () => {
    //console.log(`in getFilteredList`);
    return todo
      .filter(item => {
        if(filter === FILTER_ALL) return item;
        if(filter === FILTER_COMPLETED) return item.completed;
        if(filter === FILTER_NON_COMPLETED) return !item.completed;
      })
  }

  // const filteredList = getFilteredList();
  const filteredList = useMemo(() => getFilteredList(), [todo, filter]);

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <ul style={{color: theme===THEME_LIGHT ? `orange` : `blue`}}>
      {filteredList.map((item) => (
        <TodoItem key={item.id} item={item} changeCompleted={changeCompleted} deleteListItem={deleteListItem} />
      ))}
    </ul>
  );
}
