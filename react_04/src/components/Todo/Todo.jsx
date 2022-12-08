import React, { Component } from "react";
import { getTodo, deleteItem, changeItem } from "./../../services/todoService";
import ToDoItem from "./ToDoItem";

class Todo extends Component {
  state = {
    list: [],
  };

  async componentDidMount() {
    this.setState({
      list: await getTodo(),
    });
  }

  async handleDeleteItem(id) {
    await deleteItem(id);

    this.setState({
      list: this.state.list.filter((item) => item.id !== id),
    });
  }

  async handleChangeItem(item) {
    let changedItem = await changeItem(item.id, { completed: !item.completed });

    this.setState({
      list: this.state.list.map((element) => {
        if (element.id === item.id) element = changedItem;
        return element;
      }),
    });
  }

  render() {
    let { list } = this.state;

    return (
      <ul>
        {list.map((item) => (
          <ToDoItem
            key={item.id}
            item={item}
            handleChangeItem={() => this.handleChangeItem(item)}
            handleDeleteItem={() => this.handleDeleteItem(item.id)}
          />
        ))}
      </ul>
    );
  }
}

export default Todo;
