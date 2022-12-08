import React, { Component } from "react";

class ListItem extends Component {
  componentDidMount() {
    console.log(`in ListItem componentDidMount`);
  }

  componentDidUpdate() {
    console.log(`in ListItem componentDidUpdate`);
  }

  componentWillUnmount() {
    console.log(`in ListItem componentWillUnmount`);
  }

  render() {
    let { item, deleteItem } = this.props;

    return (
      <li key={item.id}>
        {item.title} <button onClick={deleteItem}>Delete</button>
      </li>
    );
  }
}

export default ListItem;
