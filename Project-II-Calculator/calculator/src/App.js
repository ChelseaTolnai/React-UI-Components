import React, { Component } from 'react';
import './App.css';
import CalculatorDisplay from '../src/components/DisplayComponents/CalculatorDisplay';
import '../src/components/ButtonComponents/Button.css';
import ActionButton from '../src/components/ButtonComponents/ActionButton';
import NumberButton from '../src/components/ButtonComponents/NumberButton'
import OperatorButton from '../src/components/ButtonComponents/OperatorButton'

class App  extends Component {
  constructor () {
    super();
    this.result = ["0"];
    this.state={
      display: this.result,
    };
    this.handleClickNum = this.handleClickNum.bind(this);
    this.handleClickReset = this.handleClickReset.bind(this);
  }

  handleClickNum (e) {
    if (this.result[0] === "0") {this.result.shift()}
    let value = e.target.getAttribute('value');
    this.result.push(value);
    this.setState ({
      display: this.result,
    });
  }

  handleClickReset (e) {
    this.result = ["0"]
    this.setState ({
      display: this.result,
    });
  }

  render () {
    return (
      <div className="App">
        <CalculatorDisplay display={this.state.display}/>

        <div className="CalculatorButtons">
          <div className="numbers-reset">
              <ActionButton onClick={this.handleClickReset} buttonStyle="action" text="clear" id="clear"/>
              <NumberButton onClick={this.handleClickNum}/>
              <ActionButton onClick={this.handleClickNum} buttonStyle="action" text="0" id="zero" value={0}/>
          </div>
          <OperatorButton />
        </div>

      </div>
    );
  }
};

export default App;
