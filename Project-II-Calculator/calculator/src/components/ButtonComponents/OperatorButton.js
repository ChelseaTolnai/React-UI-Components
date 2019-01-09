import React from 'react';
import './Button.css';

const operatorList = [
    {text: "\u00F7", value: "/"},
    {text: "\u00D7", value: "*"},
    {text: "\u2212", value: "-"},
    {text: "\u002B", value: "+"},
    {text: "=", value: "="},
];

const OperatorButton = (props) => {
    return (
        <div className="operators">
            {operatorList.map(operator => {
                return (
                    <button 
                        onClick={props.onClick} 
                        className="operator" 
                        key={operator.value} 
                        value={operator.value}
                    >
                        {operator.text}
                    </button>
                )}
            )}
        </div>    
    )
};
  
export default OperatorButton;