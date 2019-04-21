import React, { Component } from 'react';
import ReactWork from './ReactWork.js';
import JsWork from './JsWork.js';
import HtmlWork from './HtmlWork.js';

class Work extends Component {
  render() {
    return (
      <div className='work'>
        <div className='wrapper'>
          <JsWork />
          <HtmlWork />
          <ReactWork />
        </div>
      </div>
    );
  }
}

export default Work;
