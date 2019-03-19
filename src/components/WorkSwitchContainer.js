import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import HtmlWork from './HtmlWork.js';
import JsWork from './JsWork.js';
import ReactWork from './ReactWork.js';
import pattern from '../assets/work.png';

const workPlaceHolder = () => {
  return (
    <div>
      <div className='imgContainer'>
        <img src={pattern} alt='decorative illustration' />
      </div>
      <div className='copyWrap'>
        <h2>My Work</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
          sunt eius obcaecati nisi hic minus! Pariatur voluptas laudantium
          eveniet velit distinctio laborum reiciendis quaerat consequuntur quos
          itaque dolorem excepturi omnis adipisci veritatis ipsa ut beatae quis
          cupiditate corporis, odio exercitationem? Deserunt voluptate dolorum
          repudiandae, laudantium eligendi a debitis ab commodi officia tempora,
          nemo tenetur culpa quisquam corrupti nisi eaque eius.
        </p>
      </div>
    </div>
  );
};

const WorkSwitchContainer = ({ location }) => {
  return (
    <div className='workSection'>
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={{ enter: 300, exit: 300 }}
          classNames={'fade'}
        >
          <Switch>
            <Route exact path='/work/' component={workPlaceHolder} />
            <Route exact path='/work/html' component={HtmlWork} />
            <Route path='/work/js' component={JsWork} />
            <Route path='/work/react' component={ReactWork} />
            <Redirect to='/work/' />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default withRouter(WorkSwitchContainer);
