import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ExchangedCurrency from './Components/CurrencyConverter';

class App extends Component {
  render() {
    return (
      <>
        <h2>
          Higher Order Component
        </h2>
        <ExchangedCurrency />
      </>
    );
  }
}

export default App;
