import React, { Component } from 'react';

class ValueBlock extends Component {

    calculation(value){
        return Math.pow(value, 3);
    }

    render() {
        let {value} = this.props
        return (
            <div>
                Counter in ValueBlock: {this.calculation(value)}
            </div>
        );
    }
}

export default ValueBlock;