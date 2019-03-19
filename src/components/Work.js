import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import WorkSwitchContainer from './WorkSwitchContainer.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faHtml5, faJs, faReact } from '@fortawesome/free-brands-svg-icons';

library.add(fab, faHtml5, faJs, faReact);

class Work extends Component {
  render() {
    return (
      <div className='work'>
        <div className='wrapper'>
          <WorkSwitchContainer />

          <ul className='workIcons'>
            <li>
              <NavLink to='/work/react' activeClassName='active'>
                <FontAwesomeIcon icon={faReact} />
              </NavLink>
            </li>
            <li>
              <NavLink to='/work/js' activeClassName='active'>
                <FontAwesomeIcon icon={faJs} />
              </NavLink>
            </li>
            <li>
              <NavLink to='/work/html' activeClassName='active'>
                <FontAwesomeIcon icon={faHtml5} />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Work;
