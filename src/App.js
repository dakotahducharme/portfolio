import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
          <Home />
        </header>
      </div>
    );
  }
}

export default App;
