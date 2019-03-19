import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import SwitchContainer from './components/SwitchContainer.js';
import logo3 from './assets/logo3.png';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faTwitter,
  faLinkedinIn,
  faGithub
} from '@fortawesome/free-brands-svg-icons';

library.add(fab, faTwitter, faLinkedinIn, faGithub);

class App extends Component {
  render() {
    return (
      <div className='wrapper'>
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
                    <NavLink to='/about' activeClassName='active'>
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to='/skills' activeClassName='active'>
                      Skills
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
              <ul className='socials'>
                <li>
                  <a href='https://twitter.com/danOcoder'>
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li>
                  <a href='https://www.linkedin.com/in/danocoder/'>
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                </li>
                <li>
                  <a href='https://github.com/danOcoder'>
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='sectionWrapper'>
            <SwitchContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
