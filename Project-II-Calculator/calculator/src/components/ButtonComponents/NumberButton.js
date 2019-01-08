import React, { Component } from 'react';
import './Button.css';

const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const NumberButton = (props) => {
    return (
        <div className="numbers">
            {numberList.map(number => {
                return (
                    <button 
                        onClick={props.onClick} 
                        className="number" 
                        key={number} 
                        value={number}
                    >
                        {number}
                    </button>
                )}
            )}
        </div>             
    )
};
  
export default NumberButton;