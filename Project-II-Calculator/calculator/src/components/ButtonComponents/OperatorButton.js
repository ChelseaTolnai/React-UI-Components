import React, { Component } from 'react';
import './Button.css';

const operatorList = [
    {text: "\u00F7", value: "/"},
    {text: "\u00D7", value: "*"},
    {text: "\u2212", value: "-"},
    {text: "\u002B", value: "+"},
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
                        <button onClick={this.props.onClick} className="operator" key={operator.value} value={operator.value}>{operator.text}</button>
                    )}
                )}
            </div>    
        ); 
    }
};
  
export default OperatorButton;