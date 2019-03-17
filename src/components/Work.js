import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import HtmlWork from './HtmlWork.js';
import JsWork from './JsWork.js';
import ReactWork from './ReactWork.js';
import '../styles/work.css';
import pattern from '../assets/work.png';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faHtml5, faJs, faReact } from '@fortawesome/free-brands-svg-icons';

library.add(fab, faHtml5, faJs, faReact);

const workPlaceHolder = () => {
  return (
    <div>
      <div className='imgContainer'>
        <img src={pattern} alt='decorative illustration' />
      </div>
      <h2>My Work</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
        sunt eius obcaecati nisi hic minus! Pariatur voluptas laudantium eveniet
        velit distinctio laborum reiciendis quaerat consequuntur quos itaque
        dolorem excepturi omnis adipisci veritatis ipsa ut beatae quis
        cupiditate corporis, odio exercitationem? Deserunt voluptate dolorum
        repudiandae, laudantium eligendi a debitis ab commodi officia tempora,
        nemo tenetur culpa quisquam corrupti nisi eaque eius.
      </p>
    </div>
  );
};

class Work extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className='work'>
        <div className='wrapper'>
          <div className='workSection'>
            <Switch>
              <Route exact path='/work/' component={workPlaceHolder} />
              <Route exact path='/work/html' component={HtmlWork} />
              <Route path='/work/js' component={JsWork} />
              <Route path='/work/react' component={ReactWork} />
              <Redirect to='/work/' />
            </Switch>
          </div>
          <ul className='workIcons'>
            <li>
              <NavLink to='/work/html' activeClassName='active'>
                <FontAwesomeIcon icon={faHtml5} />
              </NavLink>
            </li>
            <li>
              <NavLink to='/work/js' activeClassName='active'>
                <FontAwesomeIcon icon={faJs} />
              </NavLink>
            </li>
            <li>
              <NavLink to='/work/react' activeClassName='active'>
                <FontAwesomeIcon icon={faReact} />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Work;
