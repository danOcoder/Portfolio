import React, { Component } from 'react';
import SleepEfficiencyCalculator from '../assets/jsWork.jpg';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faJsSquare, faSass } from '@fortawesome/free-brands-svg-icons';

library.add(fab, faJsSquare, faSass);

class JsWork extends Component {
  render() {
    return (
      <div className='workWrap'>
        <a
          href='https://danocoder.github.io/sleep-efficiency-calculator/'
          target='_blank'
        >
          <div className='imgContainer'>
            <img
              src={SleepEfficiencyCalculator}
              alt='decorative illustration'
            />
          </div>
        </a>
        <div className='copyWrap'>
          <h2>Sleep Efficiency Calculator</h2>
          <p>
            Calculate your sleep efficiency - the percentage of time spent
            asleep while in bed. See it{' '}
            <span className='bold'>
              <a
                href='https://danocoder.github.io/sleep-efficiency-calculator/'
                target='_blank'
              >
                live
              </a>
            </span>{' '}
            or on{' '}
            <span className='bold'>
              <a
                href='https://github.com/danOcoder/sleep-efficiency-calculator'
                target='_blank'
              >
                GitHub
              </a>
            </span>
            .
          </p>
          <p>JQuery | JavaScript | Sass </p>
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
