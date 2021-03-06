import React, { Component } from 'react';
import barOne from '../assets/htmlWork.jpg';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faHtml5, faCss3Alt, faSass } from '@fortawesome/free-brands-svg-icons';

library.add(fab, faHtml5, faCss3Alt, faSass);

class HtmlWork extends Component {
  render() {
    return (
      <div className='workWrap'>
        <a
          href='https://danocoder.github.io/bar-one/index.html'
          target='_blank'
        >
          <div className='imgContainer'>
            <img src={barOne} alt='decorative illustration' />
          </div>
        </a>
        <div className='copyWrap'>
          <h2>Bar-One</h2>
          <p>
            Multi Page PSD conversion. See it{' '}
            <span className='bold'>
              <a
                href='https://danocoder.github.io/bar-one/index.html'
                target='_blank'
              >
                live
              </a>
            </span>{' '}
            or on{' '}
            <span className='bold'>
              <a href='https://github.com/danOcoder/Bar-One' target='_blank'>
                GitHub.
              </a>
            </span>
          </p>
          <p>HTML5 | Sass</p>
          <span className='workIcons'>
            <FontAwesomeIcon icon={faHtml5} />
          </span>
          <span className='workIcons'>
            <FontAwesomeIcon icon={faSass} />
          </span>
        </div>
      </div>
    );
  }
}

export default HtmlWork;
