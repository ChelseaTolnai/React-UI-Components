import React from 'react';
import './Display.css';

const CalculatorDisplay = (props) => {
    return (
        <div className="CalculatorDisplay">
            {props.display}
        </div>
    )
};
  
export default CalculatorDisplay;