import React from 'react';
import './Button.css';

const ActionButton = (props) => {
    return (
        <button 
            onClick={props.onClick} 
            onMouseDown={props.onMouseDown} 
            onMouseUp={props.onMouseUp} 
            className={`${props.buttonStyle} ${props.clickStatus}`} 
            id={props.id} 
            value={props.value}
        >
            {props.text}
        </button>
    );  
};
  
export default ActionButton;