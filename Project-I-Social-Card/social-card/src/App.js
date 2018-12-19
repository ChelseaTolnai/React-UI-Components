import React from 'react';
import './App.css';
import HeaderContainer from '../src/components/HeaderComponents/HeaderContainer';
import CardContainer from '../src/components/CardComponents/CardContainer';
import Footer from '../src/components/FooterComponents/Footer';


const App = () => {
  return (
    <div className="App">
      <h2>App</h2>
      <HeaderContainer />
      <CardContainer />
      <Footer />
    </div>
  );
};

export default App;
