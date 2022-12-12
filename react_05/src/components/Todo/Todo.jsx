import React, { Component } from "react";
import ToDoItem from "./ToDoItem";

class Todo extends Component {

  async componentDidMount() {
    this.props.setList();
  }

  async handleDeleteItem(id) {
    this.props.deleteListItem(id);
  }

  async handleChangeItem(item) {
    this.props.changeListItem(item);
  }

  render() {
    let { list } = this.props;

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
