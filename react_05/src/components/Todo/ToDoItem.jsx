import React, { Component } from "react";

import ItemCompleted from './ItemCompleted'
import ItemDeleteBtn from './ItemDeleteBtn'

class ToDoItem extends Component {
  render() {
    let { item, handleChangeItem, handleDeleteItem } = this.props;
    return (
      <li>
        {item.title}{" "}
        <ItemCompleted item={item} handleChangeItem={handleChangeItem} />
        <ItemDeleteBtn handleDeleteItem={handleDeleteItem} />
      </li>
    );
  }
}

export default ToDoItem;
