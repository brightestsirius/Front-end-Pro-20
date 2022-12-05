import React, { Component, Fragment } from "react";
import List from "./components/List";
import Counter from "./components/Counter";
import ValueBlock from './components/ValueBlock'

class App extends Component {
  constructor() {
    super();

    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
  }

  state = {
    todoList: [
      {
        id: 1,
        title: `Todo 1`,
      },
      {
        id: 2,
        title: `Todo 2`,
      },
      {
        id: 3,
        title: `Todo 3`,
      },
      {
        id: 4,
        title: `Todo 4`,
      },
      {
        id: 5,
        title: `Todo 5`,
      },
    ],
    counter: 0,
  };

  decrement() {
    this.setState({ counter: this.state.counter - 1 });
  }

  increment() {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    const { todoList, counter } = this.state;

    return (
      <Fragment>
        {/* <List list={todoList} /> */}
        
        <h3>Counter in App: {counter}</h3>

        <Counter
          counter={counter}
          decrement={this.decrement}
          increment={this.increment}
        />
        
        <ValueBlock value={counter} />
      </Fragment>
    );
  }
}

export default App;
