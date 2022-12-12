import React, { Component } from "react";
import "./style.sass";

export default class Table extends Component {
  constructor() {
    super();

    Object.defineProperty(this.state.animals, `active`, {
      enumerable: true
    });
  }

  state = {
    animals: [
      {
        name: `tiger`,
        age: 3,
      },
      {
        name: `lion`,
        age: 9,
      },
    ],
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        animals: this.state.animals.map((item, index) => {
          if (!index) item.active = `true`;
          return item;
        }),
      });
    }, 1500);
  }

  render() {
    const { animals } = this.state;

    return (
      <table>
        <tbody>
          {animals.map((item, index) => (
            <tr key={index}>
              {Object.keys(item).map((k, i) => (
                <td key={i}>{item[k]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
