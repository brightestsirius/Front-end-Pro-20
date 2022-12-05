import React, { Component } from "react";
import "./style.sass";

class List extends Component {
  constructor(props) {
    super(props);

    const doneItems = setInterval(() => {
      const randomId = this.state.listIDs[Math.floor(Math.random()*this.state.listIDs.length)];
    //   console.log(randomId);

      this.setState({
        list: this.state.list.map(item => {
            if(item.id === randomId) item.isDone = true;
            return item;
        }),
        listIDs: this.state.listIDs.filter(item => item !== randomId)
      }, () => {
        // console.log(`in callback setState`, this.state.listIDs);

        if(this.state.listIDs.length === Math.floor(this.state.list.length/2)){
            this.setState({
                ulBG: `orange`
            })
        }

        if(!this.state.listIDs.length){
            clearInterval(doneItems);
            this.setState({
                ulBG: `red`
            })
        }
      })

    //   console.log(`after setState`, this.state.listIDs);
    }, 1000);
  }

  state = {
    list: this.props.list,
    listIDs: this.props.list.map(item => item.id),
    ulBG: `transparent`
  };

  render() {
    const { list, ulBG } = this.state;

    return (
      <ul style={{background: ulBG}}>
        {list.map((item) => (
          <li
            style={{ color: item.isDone ? `green` : undefined }}
            key={item.id}
          >
            {item.title}
          </li>
        ))}
      </ul>
    );
  }
}

export default List;
