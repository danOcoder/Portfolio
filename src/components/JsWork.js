import React, { Component } from 'react';
import overratedUnderrated from '../assets/jsSite.png';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faJsSquare, faSass } from '@fortawesome/free-brands-svg-icons';

library.add(fab, faJsSquare, faSass);

class JsWork extends Component {
  render() {
    return (
      <div className='workWrap'>
        <div className='imgContainer'>
          <img src={overratedUnderrated} alt='decorative illustration' />
        </div>
        <div className='copyWrap'>
          <h2>Overrated or Underrated?</h2>
          <p>
            Think brussels sprouts are underrated? Then this is the web app for
            you. See it{' '}
            <span className='bold'>
              <a
                href='https://danocoder.github.io/overrated-underrated/'
                target='_blank'
              >
                live
              </a>
            </span>{' '}
            or on{' '}
            <span className='bold'>
              <a
                href='https://github.com/danOcoder/Overrated-Underrated'
                target='_blank'
              >
                GitHub
              </a>
            </span>
            .
          </p>
          <p>JQuery | JavaScript | Sass | API</p>
          <span className='workIcons'>
            <i class='devicon-jquery-plain' />
          </span>
          <span className='workIcons'>
            <FontAwesomeIcon icon={faJsSquare} />
          </span>
          <span className='workIcons'>
            <FontAwesomeIcon icon={faSass} />
          </span>
        </div>
      </div>
    );
  }
}

export default JsWork;
