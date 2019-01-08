import React, { Component } from 'react';

import CalculatorDisplay from '../src/components/DisplayComponents/CalculatorDisplay';
import ActionButton from '../src/components/ButtonComponents/ActionButton';
import NumberButton from '../src/components/ButtonComponents/NumberButton'
import OperatorButton from '../src/components/ButtonComponents/OperatorButton'

import './App.css';
import '../src/components/ButtonComponents/Button.css'

class App extends Component {
  constructor () {
    super();
    this.result = ["0"];
    this.state={
      display: this.result,
    };
  }

  handleClick = (e) => {
    document.querySelectorAll("button").forEach( btn => btn.classList.remove("clicked"));
    e.target.classList.add("clicked");

    if (this.result[0] === "0") {
      this.result = [""];
      this.setState ({
        display: this.result,
      });
    }

    if (this.result[0] === "=") {
      this.result = [""];
      this.setState ({
        display: this.result,
      });
    }

    let id = e.target.getAttribute('id');
    if (id === "clear") {
      this.result = ["0"];
      this.setState ({
        display: this.result,
      });
      return;
    }

    let value = e.target.getAttribute('value');
    if (value === "=") {
      let calculate = Function(' "use strict"; return (' + this.result.join('') + ')')();
      this.result = ["=", calculate.toString().slice(0, 10)];
      this.setState ({
        display: this.result,
      });
      return;
    }

    this.result.push(value);
    this.setState ({
      display: this.result.join(''),
    });
  }

  render () {
    return (
      <div className="App">
        <CalculatorDisplay display={this.state.display}/>

        <div className="CalculatorButtons">
          <div className="numbers-reset">
            <ActionButton onClick={this.handleClick} buttonStyle="action" text="clear" id="clear" />
            <NumberButton onClick={this.handleClick} />
            <ActionButton onClick={this.handleClick} buttonStyle="action" text="0" id="zero" value={0} />
          </div>
          <OperatorButton onClick={this.handleClick}/>
        </div>

      </div>
    );
  }
};

export default App;
