import React, { Component } from 'react';
import './Button.css';

const operatorList = [
    {text: <span>&divide;</span>, value: "/"},
    {text: <span>&times;</span>, value: "*"},
    {text: <span>&minus;</span>, value: "-"},
    {text: "+", value: "+"},
    {text: "=", value: "="},
];

class OperatorButton extends Component {
    constructor () {
        super();
        this.state ={
            operators: operatorList,
        };
    }

    render () {
        return (
            <div className="operators">
                {this.state.operators.map(operator => {
                    return (
                        <button className="operator" key={operator.value} value={operator.value}>{operator.text}</button>
                    )}
                )}
            </div>    
        ); 
    }
};
  
export default OperatorButton;