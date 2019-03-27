import React, { Component } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
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
                  <Link
                    to='sectionWrapper'
                    spy={true}
                    smooth={true}
                    duration={900}
                  >
                    <NavLink to='/'>
                      <img src={logo3} alt='Dan OConnor Web Development logo' />
                    </NavLink>
                  </Link>
                </div>
                <h1>
                  Dan <br />
                  O'Connor
                </h1>
                <h2>Web Development</h2>
                <nav>
                  <ul className='navList'>
                    <li>
                      <Link
                        to='sectionWrapper'
                        spy={true}
                        smooth={true}
                        duration={900}
                      >
                        <NavLink to='/about' activeClassName='active'>
                          About
                        </NavLink>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='sectionWrapper'
                        spy={true}
                        smooth={true}
                        duration={900}
                      >
                        <NavLink to='/skills' activeClassName='active'>
                          Skills
                        </NavLink>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='sectionWrapper'
                        spy={true}
                        smooth={true}
                        duration={900}
                      >
                        <NavLink to='/work' activeClassName='active'>
                          Work
                        </NavLink>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='sectionWrapper'
                        spy={true}
                        smooth={true}
                        duration={900}
                      >
                        <NavLink to='/contact' activeClassName='active'>
                          Contact
                        </NavLink>
                      </Link>
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
              </header>
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
