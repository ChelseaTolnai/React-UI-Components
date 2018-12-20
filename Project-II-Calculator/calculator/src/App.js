import React from 'react';
import './App.css';
import CalculatorDisplay from '../src/components/DisplayComponents/CalculatorDisplay';
import CalculatorButtons from '../src/components/ButtonComponents/CalculatorButtons';

const App = () => {
  return (
    <div className="App">
      <CalculatorDisplay />
      <CalculatorButtons />
    </div>
  );
};

export default App;
