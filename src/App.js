import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import SwitchContainer from './components/SwitchContainer.js';
import Footer from './components/Footer.js';
import logo3 from './assets/logo3.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className='flexParent'>
          <div className='navColumn'>
            <div className='wrapper'>
              <header>
                <div className='imgContainer'>
                  <img src={logo3} alt='Dan OConnor Web Development logo' />
                </div>
                <h1>
                  Dan <br />
                  O'Connor
                </h1>
                <h2>Web Development</h2>
              </header>
              <nav>
                <ul className='navList'>
                  <li>
                    <NavLink to='/skills' activeClassName='active'>
                      Skills
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to='/about' activeClassName='active'>
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to='/work' activeClassName='active'>
                      Work
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to='/contact' activeClassName='active'>
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className='sectionWrapper'>
            <SwitchContainer />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
