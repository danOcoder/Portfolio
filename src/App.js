import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import About from './components/About.js';
import Work from './components/Work.js';
import Contact from './components/Contact.js';
import Skills from './components/Skills.js';
import Thanks from './components/Thanks';
import Footer from './components/Footer.js';
import logo3 from './assets/logo3.png';
import './App.css';
import './styles/nav.css';

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
          <TransitionGroup className='transition-group'>
            <CSSTransition
              key={location.key}
              timeout={{ enter: 300, exit: 300 }}
              classNames='fade'
            >
              <div className='section'>
                <Switch>
                  <Route exact path='/' component={Skills} />
                  <Route exact path='/skills' component={Skills} />
                  <Route path='/about' component={About} />
                  <Route path='/work' component={Work} />
                  <Route path='/contact' component={Contact} />
                  <Route path='/thanks' component={Thanks} />
                  <Redirect to='/' />
                </Switch>
              </div>
            </CSSTransition>
          </TransitionGroup>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
