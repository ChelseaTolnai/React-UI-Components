import React, { Component } from 'react';
import './Button.css';

class ActionButton extends Component {
    constructor () {
        super();
        this.state ={};
    }
    
    render () {
        return (
            <button onClick={this.props.onClick} className={this.props.buttonStyle} id={this.props.id} value={this.props.value}>{this.props.text}</button>
        );
    }
};
  
export default ActionButton;