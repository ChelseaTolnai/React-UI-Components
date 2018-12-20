import React from 'react';
import './Button.css';
import ActionButton from './ActionButton';
import NumberButton from './NumberButton'

const CalculatorButtons = () => {
    return (
        <div className="CalculatorButtons">
            <div className="numbers-reset">
                
                <ActionButton buttonStyle="action" text="clear" id="clear"/>

                <div className="numbers">
                    <NumberButton buttonStyle="number" text="1"/>
                    <NumberButton buttonStyle="number" text="2"/>
                    <NumberButton buttonStyle="number" text="3"/>
                    <NumberButton buttonStyle="number" text="4"/>
                    <NumberButton buttonStyle="number" text="5"/>
                    <NumberButton buttonStyle="number" text="6"/>
                    <NumberButton buttonStyle="number" text="7"/>
                    <NumberButton buttonStyle="number" text="8"/>
                    <NumberButton buttonStyle="number" text="9"/>
                </div>

                <ActionButton buttonStyle="action" text="0" id="zero"/>
                
            </div>
            <div className="operators">
                <NumberButton buttonStyle="operator" text="&divide;"/>
                <NumberButton buttonStyle="operator" text="&times;"/>
                <NumberButton buttonStyle="operator" text="&minus;"/>
                <NumberButton buttonStyle="operator" text="+"/>
                <NumberButton buttonStyle="operator" text="="/>
            </div>
        </div>
    );
};
  
export default CalculatorButtons;