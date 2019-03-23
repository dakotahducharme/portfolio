import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import Header from './Header';
import Contact from './Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
          <Home />
          <Contact />
        </header>
      </div>
    );
  }
}

export default App;
