import React, { Component } from "react";

import ListItem from './ListItem'

class List extends Component {
  constructor() {
    super();

    this.deleteItem = this.deleteItem.bind(this);

    this.state = {
      todo: [
        {
          id: 1,
          title: `Todo 1`,
          completed: true,
        },
        {
          id: 2,
          title: `Todo 2`,
          completed: false,
        },
        {
          id: 3,
          title: `Todo 3`,
          completed: true,
        },
      ],
      removeItemInt: null,
    };
  }

  componentDidMount() {
    console.log(`in List componentDidMount`);

    this.setState({
        removeItemInt: setInterval(() => {
          console.log(`in interval`);

          this.setState(
            {
              todo: this.state.todo.slice(0, -1),
            },
            () => {
              !this.state.todo.length && clearInterval(this.state.removeItemInt);
            }
          );
        }, 1000)
      });
  }

  componentDidUpdate() {
    console.log(`in List componentDidUpdate`);
  }

  componentWillUnmount() {
    console.log(`in List componentWillUnmount`);
    clearInterval(this.state.removeItemInt);
  }

  deleteItem() {}

  render() {
    const { todo } = this.state;

    return todo.length ? (
      <ul>
        {todo.map((item) => (
            <ListItem key={item.id} item={item} deleteItem={this.deleteItem} />
        ))}
      </ul>
    ) : undefined;
  }
}

export default List;
