import React, { Component } from "react";

class ItemDeleteBtn extends Component {
  render() {
    let { handleDeleteItem } = this.props;
    return <button onClick={handleDeleteItem}>Delete</button>;
  }
}

export default ItemDeleteBtn;
