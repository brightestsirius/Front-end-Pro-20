import React, { Component } from 'react';

class Form extends Component {
    constructor(){
        super();

        this.handleTitle = this.handleTitle.bind(this);
        this.handleCompleted = this.handleCompleted.bind(this);
        this.hadleSubmit = this.hadleSubmit.bind(this);
    }

    state = {
        newTodo: {
            title: ``,
            completed: false
        }
    }

    handleTitle(e){
        this.setState({
            newTodo: {...this.state.newTodo, title: e.target.value}
        })
    }

    handleCompleted(e){
        this.setState({
            newTodo: {...this.state.newTodo, completed: e.target.checked}
        })
    }

    async hadleSubmit(e){
        e.preventDefault();
        this.props.addListItem(this.state.newTodo);
    }

    render() {
        return (
            <form onSubmit={this.hadleSubmit}>
                <label>
                    Todo title <input type="text" onChange={this.handleTitle} />
                </label>
                <label>
                    Todo completed <input type="checkbox" onChange={this.handleCompleted} />
                </label>
                <button>Create todo</button>
            </form>
        );
    }
}

export default Form;