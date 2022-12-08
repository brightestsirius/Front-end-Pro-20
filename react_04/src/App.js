import React, { Component, Fragment } from "react";
import List from "./components/List/List";
import Todo from "./components/Todo/Todo"
import Form from "./components/Form/Form"

export default class App extends Component {
  componentDidMount() {
    // setTimeout(() => {
    //   console.log(`in App timeout`);
    //   this.setState({
    //     showList: false,
    //   });
    // }, 1500);
  }

  // state = {
  //   showList: true,
  // };

  render() {
    return <Fragment>
      {/* {this.state.showList && <List />} */}
      <Form />
      <Todo />
    </Fragment>;
  }
}
