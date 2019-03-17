import React from 'react';
import { Route, NavLink, Switch, Redirect, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import About from '../components/About.js';
import Work from '../components/Work.js';
import Contact from '../components/Contact.js';
import Skills from '../components/Skills.js';
import Thanks from '../components/Thanks';
import '../styles/section.css';

const SwitchContainer = ({ location }) => {
  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={{ enter: 700, exit: 700 }}
        classNames={'fade'}
      >
        <section>
          <Switch>
            <Route exact path='/' component={Skills} />
            <Route exact path='/skills' component={Skills} />
            <Route path='/about' component={About} />
            <Route path='/work' component={Work} />
            <Route path='/contact' component={Contact} />
            <Route path='/thanks' component={Thanks} />
            <Redirect to='/' />
          </Switch>
        </section>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default withRouter(SwitchContainer);
