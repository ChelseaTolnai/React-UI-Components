import React, { Component } from 'react';
import './Display.css';

class CalculatorDisplay extends Component {
    constructor () {
        super();
        this.state={};
    }

    render () {
        return (
            <div className="CalculatorDisplay">
                {this.props.display}
            </div>
        );
    }
};
  
export default CalculatorDisplay;