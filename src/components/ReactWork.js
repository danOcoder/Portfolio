import React, { Component } from 'react';
import potusQuotes from '../assets/reactSite.png';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faReact,
  faJsSquare,
  faCss3Alt
} from '@fortawesome/free-brands-svg-icons';

library.add(fab, faReact, faJsSquare, faCss3Alt);

class ReactWork extends Component {
  render() {
    return (
      <div className='workWrap'>
        <div className='imgContainer'>
          <img src={potusQuotes} alt='decorative illustration' />
        </div>
        <div className='copyWrap'>
          <h2>Potus Quotes</h2>
          <p>
            Potus Quotes is a web app that facilitates user access to quotes
            that the current president of the United States has made in the
            public domain. See it{' '}
            <span className='bold'>
              <a href='http://danocoder.com/potus-quotes/' target='_blank'>
                live
              </a>
            </span>{' '}
            or on{' '}
            <span className='bold'>
              <a
                href='https://github.com/danOcoder/Potus-Quotes'
                target='_blank'
              >
                GitHub
              </a>
            </span>
            .
          </p>
          <p>React | JavaScript | CSS3 | API</p>
          <span className='workIcons'>
            <FontAwesomeIcon icon={faReact} />
          </span>
          <span className='workIcons'>
            <FontAwesomeIcon icon={faJsSquare} />
          </span>
          <span className='workIcons'>
            <FontAwesomeIcon icon={faCss3Alt} />
          </span>
        </div>
      </div>
    );
  }
}

export default ReactWork;
