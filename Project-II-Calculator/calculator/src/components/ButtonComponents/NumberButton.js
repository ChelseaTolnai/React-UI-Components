import React, { Component } from 'react';
import './Button.css';

const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9];


class NumberButton extends Component {
    constructor () {
        super();
        this.state ={
            numbers: numberList,
        };
    }

    render () {
        return (
            <div className="numbers">
                {this.state.numbers.map(number => {
                    return (
                        <button onClick={this.props.onClick} className="number" key={number} value={number}>{number}</button>
                    )}
                )}
            </div>             
        );
    }
};
  
export default NumberButton;