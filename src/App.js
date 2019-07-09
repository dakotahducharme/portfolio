import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import Header from './Header';
import Hero from './Hero';
import Contact from './Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
          {/* <Hero /> */}
          <Home />
          <Contact />
        </header>
      </div>
    );
  }
}

export default App;
