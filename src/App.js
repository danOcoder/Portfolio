import React, { Component } from 'react';
import Nav from './components/Nav.js';
import Footer from './components/Footer.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='wrapper'>
        <Nav />
        <Footer />
      </div>
    );
  }
}

export default App;
