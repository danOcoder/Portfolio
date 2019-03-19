import React, { Component } from 'react';
import ReactWork from './ReactWork.js';
import JsWork from './JsWork.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faHtml5, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import HtmlWork from './HtmlWork.js';

library.add(fab, faHtml5, faJs, faReact);

class Work extends Component {
  render() {
    return (
      <div className='work'>
        <div className='wrapper'>
          <ReactWork />
          <JsWork />
          <HtmlWork />
        </div>
      </div>
    );
  }
}

export default Work;
