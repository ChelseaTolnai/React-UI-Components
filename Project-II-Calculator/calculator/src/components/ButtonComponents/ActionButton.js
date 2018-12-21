import React, { Component } from 'react';
import './Button.css';

class ActionButton extends Component {
    constructor () {
        super();
        this.state ={};
    }
    
    render () {
        return (
            <button className={this.props.buttonStyle} id={this.props.id}>{this.props.text}</button>
        );
    }
};
  
export default ActionButton;