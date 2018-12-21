import React, { Component } from 'react';
import './App.css';
import CalculatorDisplay from '../src/components/DisplayComponents/CalculatorDisplay';
// import CalculatorButtons from '../src/components/ButtonComponents/CalculatorButtons';
import '../src/components/ButtonComponents/Button.css';
import ActionButton from '../src/components/ButtonComponents/ActionButton';
import NumberButton from '../src/components/ButtonComponents/NumberButton'
import OperatorButton from '../src/components/ButtonComponents/OperatorButton'

class App  extends Component {
  constructor () {
    super();
    this.state={
      display: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (e) {
    let value = e.target.getAttribute('value');
    this.setState ({
      display: value,
    });
  }

  render () {
    return (
      <div className="App">
        <CalculatorDisplay display={this.state.display}/>
        {/* <CalculatorButtons onClick={this.handleClick} /> */}

        <div className="CalculatorButtons">
          <div className="numbers-reset">
              <ActionButton buttonStyle="action" text="clear" id="clear"/>
              <NumberButton onClick={this.handleClick}/>
              <ActionButton buttonStyle="action" text="0" id="zero"/>
          </div>
          <OperatorButton />
        </div>

      </div>
    );
  }
};

export default App;
