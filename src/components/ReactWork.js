import React, { Component } from 'react';
import qpf from '../assets/quickFlickPicker.jpg';
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
        <a href='https://react-firebase-daeaf.firebaseapp.com' target='_blank'>
          <div className='imgContainer'>
            <img src={qpf} alt='decorative illustration' />
          </div>
        </a>
        <div className='copyWrap'>
          <h2>Quick Flick Picker</h2>
          <p>
            Quick Flick Picker allows users to create movie lists & filter them
            based on genre & duration using a natural language form. This was a
            group project involving{' '}
            <span className='bold'>
              <a href='http://jennamaaskant.com/' target='_blank'>
                Jenna Maaskant
              </a>
            </span>
            ,{' '}
            <span className='bold'>
              <a href='http://dennismcleodcodes.com/' target='_blank'>
                Dennis McLeod
              </a>
            </span>
            ,{' '}
            <span className='bold'>
              <a href='http://jaimiejewell.com/' target='_blank'>
                Jamie Jewell
              </a>
            </span>{' '}
            & myself. See it{' '}
            <span className='bold'>
              <a
                href='https://react-firebase-daeaf.firebaseapp.com'
                target='_blank'
              >
                live
              </a>
            </span>{' '}
            or on{' '}
            <span className='bold'>
              <a
                href='https://github.com/quick-flick-picker/quickFlickPicker'
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
