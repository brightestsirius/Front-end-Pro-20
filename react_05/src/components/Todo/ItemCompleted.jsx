import React, { Component } from "react";

class ItemCompleted extends Component {
  render() {
    let { item, handleChangeItem } = this.props;
    return (
      <input
        type="checkbox"
        defaultChecked={item.completed}
        onChange={handleChangeItem}
      />
    );
  }
}

export default ItemCompleted;
