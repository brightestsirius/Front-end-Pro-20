import React, { Component } from 'react';
import './style.sass'

class Counter extends Component {
    render() {
        const {counter, decrement, increment} = this.props;

        return (
            <div className='counter'>
                <button onClick={decrement}>-</button>
                <span>{counter}</span>
                <button onClick={increment}>+</button>
            </div>
        );
    }
}

export default Counter;