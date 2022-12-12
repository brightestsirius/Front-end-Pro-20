import React, { Component, Fragment } from "react";
import Todo from "./components/Todo/Todo";
import Form from "./components/Form/Form";

import { getTodo, changeItem, deleteItem, addItem } from "./services/todoService";

export default class App extends Component {
  constructor(){
    super();

    this.setList = this.setList.bind(this);
    this.changeListItem = this.changeListItem.bind(this);
    this.deleteListItem = this.deleteListItem.bind(this);
    this.addListItem = this.addListItem.bind(this);
  }

  state = {
    list: [],
  };

  async setList() {
    this.setState({
      list: await getTodo(),
    });
  }

  async changeListItem(item) {
    let changedItem = await changeItem(item.id, { completed: !item.completed });

    this.setState({
      list: this.state.list.map((element) => {
        if (element.id === item.id) element = changedItem;
        return element;
      }),
    });
  }

  async deleteListItem(id) {
    await deleteItem(id);

    this.setState({
      list: this.state.list.filter((item) => item.id !== id),
    });
  }

  async addListItem(item){
    let addedItem = await addItem(item);

    this.setState({
      list: [...this.state.list, addedItem]
    })
  }

  render() {
    const { list } = this.state;

    return (
      <Fragment>
        <Form addListItem={this.addListItem} />
        <Todo
          list={list}
          setList={this.setList}
          changeListItem={this.changeListItem}
          deleteListItem={this.deleteListItem}
        />
      </Fragment>
    );
  }
}
