import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import About from '../components/About.js';
import Work from '../components/Work.js';
import Contact from '../components/Contact.js';
import Skills from '../components/Skills.js';
import Thanks from '../components/Thanks.js';
import Footer from '../components/Footer.js';
import HomePage from '../components/HomePage.js';

const SwitchContainer = ({ location }) => {
  return (
    <TransitionGroup className='route-section'>
      <CSSTransition
        key={location.key}
        timeout={{ enter: 300, exit: 300 }}
        classNames={'fade'}
      >
        <section>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/skills' component={Skills} />
            <Route path='/about' component={About} />
            <Route path='/work' component={Work} />
            <Route path='/contact' component={Contact} />
            <Route path='/thanks' component={Thanks} />
            <Redirect to='/' />
          </Switch>
          <Footer />
        </section>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default withRouter(SwitchContainer);
