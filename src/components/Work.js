import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import HtmlWork from './HtmlWork.js';
import JsWork from './JsWork.js';
import ReactWork from './ReactWork.js';
import '../styles/work.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faHtml5, faJs, faReact } from '@fortawesome/free-brands-svg-icons';

library.add(fab, faHtml5, faJs, faReact);

class Work extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className='work'>
        <div className='wrapper'>
          <div className='workIcons'>
            <NavLink to='/work/html' activeClassName='activeIcon'>
              <FontAwesomeIcon icon={faHtml5} />
            </NavLink>
            <NavLink to='/work/js' activeClassName='activeIcon'>
              <FontAwesomeIcon icon={faJs} />
            </NavLink>
            <NavLink to='/work/react' activeClassName='activeIcon'>
              <FontAwesomeIcon icon={faReact} />
            </NavLink>
          </div>
          <div className='workSection'>
            <Route path='/work/html' component={HtmlWork} />
            <Route path='/work/js' component={JsWork} />
            <Route path='/work/react' component={ReactWork} />
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
