import React, { Component } from 'react';
import Nav from './components/Nav.js';
import './App.css';
import Skills from './components/Skills.js';

class App extends Component {
  render() {
    return (
      <div className='wrapper'>
        <Nav />
      </div>
    );
  }
}

export default App;
