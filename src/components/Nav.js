import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import About from './About.js';
import Work from './Work.js';
import Contact from './Contact.js';
import Skills from './Skills.js';
import Thanks from './Thanks';
import '../styles/nav.css';
import logo3 from '../assets/logo3.png';

class Nav extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <div className='flexParent'>
          <div className='navColumn'>
            <div className='wrapper'>
              <div className='imgContainer'>
                <img src={logo3} alt='Dan OConnor Web Development logo' />
              </div>
              <h1>Dan O'Connor</h1>
              <h2>Web Development</h2>
              <nav>
                <NavLink to='/skills' activeClassName='active'>
                  Skills
                </NavLink>
                <NavLink to='/about' activeClassName='active'>
                  About
                </NavLink>
                <NavLink to='/work' activeClassName='active'>
                  Work
                </NavLink>
                <NavLink to='/contact' activeClassName='active'>
                  Contact
                </NavLink>
              </nav>
            </div>
          </div>
          <div className='section'>
            <Route path='/skills' component={Skills} />
            <Route path='/about' component={About} />
            <Route path='/work' component={Work} />
            <Route path='/contact' component={Contact} />
            <Route path='/thanks' component={Thanks} />
          </div>
        </div>
      </Router>
    );
  }
}

export default Nav;
